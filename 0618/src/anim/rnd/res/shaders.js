let vs_txt =
`#version 300 es
precision highp float;
in vec3 InPosition;
    
out vec2 DrawPos;
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
}
`;
let fs_txt =
`#version 300 es
precision highp float;
out vec4 OutColor;

in vec2 DrawPos;
uniform float Time;

uniform FrameBuffer
{
    vec4 Data;
};

void main( void )
{
    OutColor = vec4(DrawPos.xyy + DrawPos.xxy, 1.0);
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
}