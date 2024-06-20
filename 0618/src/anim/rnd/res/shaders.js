let vs_txt =
`#version 300 es
precision highp float;
in vec3 InPosition;
in vec3 InNormal;
    
out vec3 DrawPos;
out vec3 DrawNormal;
uniform float Time;

uniform mat4 MatrView;
uniform mat4 MatrVP;
uniform mat4 MatrWorld;

uniform FrameBuffer
{  
    vec4 Data;
};

void main( void )
{
    gl_Position = MatrVP * MatrWorld * vec4(InPosition, 1.0);
    DrawPos = vec3(MatrWorld * vec4(InPosition, 1));
    DrawNormal = InNormal;
}
`;
let fs_txt =
`#version 300 es
precision highp float;
out vec4 OutColor;

in vec3 DrawPos;
in vec3 DrawNormal;
uniform float Time;
uniform vec3 CamLoc;

uniform FrameBuffer
{
    vec4 Data;
};

void main( void )
{
    vec3 V = normalize(DrawPos - CamLoc);
    vec3 N = normalize(DrawNormal);
    vec3 L = normalize(vec3(1/* + 8 * sin(Time * 5)*/, 1, 1));
    vec3 color = vec3(0.2, 0.3, 0.7);

    N = faceforward(N, V, N);

    //Defuse
    vec3 KdDiff = vec3(0.4, 0.4, 0.4);
    color += KdDiff * max(0.1, dot(N, L));
    //Specular
    vec3 R = reflect(V, N);
    color += vec3(0.1, 0.2, 0.3) * max(0.0, pow(dot(R, L), 1.0));

    if (pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0) > 0.3 || 
        pow(abs(sin(Time + DrawPos.z * 0.7)), 2000.0) > 0.3)
        color = vec3(0, 1, 0);
    //color += vec3(0, 1, 0) * pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0);

    OutColor = vec4(color, 1);

    //vec3 N = DrawNormal;
    //OutColor = vec4(DrawPos.xyy + DrawPos.xxy, 1.0);
    //OutColor = vec4(N, 1.0);
}
`;

let vs_txt1 =
`#version 300 es
precision highp float;
in vec3 InPosition;
in vec3 InNormal;
    
out vec2 DrawPos;
out vec3 DrawNormal;
uniform float Time;

uniform mat4 MatrView;
uniform mat4 MatrVP;
uniform mat4 MatrWorld;

uniform FrameBuffer
{  
    vec4 Data;
};

void main( void )
{
    gl_Position = MatrVP * MatrWorld * vec4(InPosition, 1.0);
    DrawPos = InPosition.xy;
    DrawNormal = InNormal;
}
`;
let fs_txt1 =
`#version 300 es
precision highp float;
out vec4 OutColor;

in vec2 DrawPos;
in vec3 DrawNormal;
uniform float Time;

uniform FrameBuffer
{
    vec4 Data;
};

void main( void )
{
    vec3 N = DrawNormal;
    OutColor = vec4(DrawPos.xyy + DrawPos.xxy, 1.0);
    //OutColor = vec4(N, 1.0);
}
`;

class Shader {
    constructor(gl, vs_txt, fs_txt) {
        // Load and compile shader function
        const loadShader = (shaderType, shaderSource) => {
            const shader = gl.createShader(shaderType);
            gl.shaderSource(shader, shaderSource);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            let buf = gl.getShaderInfoLog(shader);
            console.log('Shader compile fail: ' + buf);
            }                                            
            return shader;
        } // End of 'loadShader' function
    
        // Shader creation
        this.vs = loadShader(gl.VERTEX_SHADER, vs_txt),
        this.fs = loadShader(gl.FRAGMENT_SHADER, fs_txt),
        this.prg = gl.createProgram();
        gl.attachShader(this.prg, this.vs);
        gl.attachShader(this.prg, this.fs);
        gl.linkProgram(this.prg);
        if (!gl.getProgramParameter(this.prg, gl.LINK_STATUS)) {
            let buf = gl.getProgramInfoLog(this.prg);
            console.log('Shader program link fail: ' + buf);
        }  
    }
}

export function loadShaders(gl, name) {
    if (name == "default")
        return new Shader(gl, vs_txt, fs_txt);
    if (name == "cube")
        return new Shader(gl, vs_txt1, fs_txt1);
}