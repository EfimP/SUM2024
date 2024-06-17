const INF = 500000;

function getLineWeight(bits, elem1, elem2) {
    let flag = false;
    let xs = [];
    let fxs = [];
    let counter = 0;

    for (let x = 0; elem1 + x <= elem2; x++)
        if (elem1 + x == elem2 && flag == false) {
            for (x = 0; elem1 + x <= elem2; x++)
                bits[elem1 + x] = INF;
            return bits;
        }
        else {
            if (bits[elem1 + x] == 1) {
                xs[counter++] = x;
                if (counter > 1)
                    fxs[counter - 1] = (xs[i] + xs[i + 1]) / 2;
                flag == true;
            }
        }

    for (let i = 0, j = 0; elem1 + i <= elem2; x++) {
        if (fxs[j] < i)
            j++;
        bits[elem1 + i] = (i - xs[j]) * (i - xs[j]);
    }
    return bits;

}

function imageSDF() {
    canvas1 = document.getElementById("myCan1");
    canvas2 = document.getElementById("myCan2");
    ctx1 = canvas1.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    const imgSrc = new Image();
    const imgSDF = new Image();
    imgSrc.src = "images.png";
    imgSDF.src = "images.png";

    imgSrc.onload = () => {
        ctx1.drawImage(imgSrc, 0, 0);
        let bits_src = Array.from(ctx2.getImageData(0, 0, imgSDF.width, imgSDF.height).data);
        let bits = [];

        for (let j = 0; j <= imgSDF.height; j++)
            for (let i = 0; i <= imgSDF.width; i += 3)
                if (bits_src[i + j * imgSDF.width] + bits_src[i + j * imgSDF.width] + bits_src[i + j * imgSDF.width] >= 765)
                    bits[i / 3 + j * imgSDF.width] = INF;
                else
                    bits[i / 3 + j * imgSDF.width] = 0;

        for (let i = 0; i <= imgSDF.height; i++)
            bits = getLineWeight(bits_src, imgSDF.width * i, imgSDF.width * (i + 1));
    }
}

window.addEventListener("load", () => {
    imageSDF();
});