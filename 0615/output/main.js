(function () {
    'use strict';

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
        };
    }

    window.addEventListener("load", () => {
        imageSDF();
    });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTkYgPSA1MDAwMDA7XHJcblxyXG5mdW5jdGlvbiBnZXRMaW5lV2VpZ2h0KGJpdHMsIGVsZW0xLCBlbGVtMikge1xyXG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgIGxldCB4cyA9IFtdO1xyXG4gICAgbGV0IGZ4cyA9IFtdO1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyBlbGVtMSArIHggPD0gZWxlbTI7IHgrKylcclxuICAgICAgICBpZiAoZWxlbTEgKyB4ID09IGVsZW0yICYmIGZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZm9yICh4ID0gMDsgZWxlbTEgKyB4IDw9IGVsZW0yOyB4KyspXHJcbiAgICAgICAgICAgICAgICBiaXRzW2VsZW0xICsgeF0gPSBJTkY7XHJcbiAgICAgICAgICAgIHJldHVybiBiaXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGJpdHNbZWxlbTEgKyB4XSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB4c1tjb3VudGVyKytdID0geDtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID4gMSlcclxuICAgICAgICAgICAgICAgICAgICBmeHNbY291bnRlciAtIDFdID0gKHhzW2ldICsgeHNbaSArIDFdKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBmbGFnID09IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBlbGVtMSArIGkgPD0gZWxlbTI7IHgrKykge1xyXG4gICAgICAgIGlmIChmeHNbal0gPCBpKVxyXG4gICAgICAgICAgICBqKys7XHJcbiAgICAgICAgYml0c1tlbGVtMSArIGldID0gKGkgLSB4c1tqXSkgKiAoaSAtIHhzW2pdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiaXRzO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaW1hZ2VTREYoKSB7XHJcbiAgICBjYW52YXMxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbjFcIik7XHJcbiAgICBjYW52YXMyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbjJcIik7XHJcbiAgICBjdHgxID0gY2FudmFzMS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHgyID0gY2FudmFzMi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjb25zdCBpbWdTcmMgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IGltZ1NERiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nU3JjLnNyYyA9IFwiaW1hZ2VzLnBuZ1wiO1xyXG4gICAgaW1nU0RGLnNyYyA9IFwiaW1hZ2VzLnBuZ1wiO1xyXG5cclxuICAgIGltZ1NyYy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY3R4MS5kcmF3SW1hZ2UoaW1nU3JjLCAwLCAwKTtcclxuICAgICAgICBsZXQgYml0c19zcmMgPSBBcnJheS5mcm9tKGN0eDIuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZ1NERi53aWR0aCwgaW1nU0RGLmhlaWdodCkuZGF0YSk7XHJcbiAgICAgICAgbGV0IGJpdHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gaW1nU0RGLmhlaWdodDsgaisrKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbWdTREYud2lkdGg7IGkgKz0gMylcclxuICAgICAgICAgICAgICAgIGlmIChiaXRzX3NyY1tpICsgaiAqIGltZ1NERi53aWR0aF0gKyBiaXRzX3NyY1tpICsgaiAqIGltZ1NERi53aWR0aF0gKyBiaXRzX3NyY1tpICsgaiAqIGltZ1NERi53aWR0aF0gPj0gNzY1KVxyXG4gICAgICAgICAgICAgICAgICAgIGJpdHNbaSAvIDMgKyBqICogaW1nU0RGLndpZHRoXSA9IElORjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBiaXRzW2kgLyAzICsgaiAqIGltZ1NERi53aWR0aF0gPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbWdTREYuaGVpZ2h0OyBpKyspXHJcbiAgICAgICAgICAgIGJpdHMgPSBnZXRMaW5lV2VpZ2h0KGJpdHNfc3JjLCBpbWdTREYud2lkdGggKiBpLCBpbWdTREYud2lkdGggKiAoaSArIDEpKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIGltYWdlU0RGKCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDbkI7SUFDQSxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNyQixJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNqQixJQUFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNwQjtJQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0lBQzNDLFFBQVEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO0lBQ2pELFlBQVksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRTtJQUMvQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdEMsWUFBWSxPQUFPLElBQUksQ0FBQztJQUN4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
