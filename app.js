var remCalc = document.getElementById("remCalc");
remCalc = addEventListener("click", calculator, false)

var pxCalc = document.getElementById("pxCalc");
pxCalc = addEventListener("click", calculator, false);

function calculator() {
    var baseDocPixelPx = document.getElementById("baseDocPixelPx").value;
    var baseDocPixelRem = document.getElementById("baseDocPixelRem").value;
    var userPixelSize = document.getElementById("userPixelSize").value;
    var userRemSize = document.getElementById("userRemSize").value;
    if (userPixelSize > 0 && baseDocPixelRem > 0) {
        var rems = userPixelSize / baseDocPixelRem;
        remsDecim = +rems.toFixed(2);
        document.getElementById("remCalculator").innerHTML = remsDecim + " rem";
    } else {
        document.getElementById("remCalculator").innerHTML = "Nie podano wartości do obliczeń PX->REM";
    }
    if (baseDocPixelPx > 0 && userRemSize > 0) {
        var pixels = userRemSize * baseDocPixelPx;
        document.getElementById("pxCalculator").innerHTML = pixels + " pixels";
    } else {
        document.getElementById("pxCalculator").innerHTML = "Nie podano wartości do obliczeń REM->PX";
    }
}