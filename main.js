function a() {
    var bTopotaMadre = 1;
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;

    if (a == 8) {
        if (b == 5) {
            if (c == 9 || d == 11) {
                if (a == 9) {
                    if (c == 11) {
                        bTopotaMadre = 2;
                    }
                }
            }
        }
    }
    return bTopotaMadre;
}

function soyUnInutilEscogiendoNombres(paramA, paramB, paramC) {
    a(paramB, paramC);
}

module.exports.soyUnInutilEscogiendoNombres = soyUnInutilEscogiendoNombres;
