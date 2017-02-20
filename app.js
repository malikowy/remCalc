let remCalc = document.getElementById("remCalc");
remCalc = addEventListener("click", calculator, false)

let pxCalc = document.getElementById("pxCalc");
pxCalc = addEventListener("click", calculator, false);

function calculator() {
    let baseDocPixelPx = document.getElementById("baseDocPixelPx").value;
    let baseDocPixelRem = document.getElementById("baseDocPixelRem").value;
    let userPixelSize = document.getElementById("userPixelSize").value;
    let userRemSize = document.getElementById("userRemSize").value;
    if (userPixelSize > 0 && baseDocPixelRem > 0) {
        let rems = userPixelSize / baseDocPixelRem;
        remsDecim = +rems.toFixed(4);
        document.getElementById("remCalculator").innerHTML = remsDecim + " rem";
    } else {
        document.getElementById("remCalculator").innerHTML = "Nie podano wartości do obliczeń PX->REM";
    }
    if (baseDocPixelPx > 0 && userRemSize > 0) {
        let pixels = userRemSize * baseDocPixelPx;
        document.getElementById("pxCalculator").innerHTML = pixels + " pixels";
    } else {
        document.getElementById("pxCalculator").innerHTML = "Nie podano wartości do obliczeń REM->PX";
    }
}