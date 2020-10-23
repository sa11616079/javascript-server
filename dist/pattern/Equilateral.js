"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function equilateral(noOfRows) {
    let s1 = "", s2 = "";
    for (let i = 1; i <= noOfRows; i++) {
        for (let j = 1; j <= noOfRows - i; j++) {
            s1 += " ";
        }
        for (let k = 1; k <= i; k++) {
            s2 += "* ";
        }
        console.log(s1, s2);
        s1 = "";
        s2 = "";
    }
}
// equilateral(10);
exports.default = equilateral;
//# sourceMappingURL=Equilateral.js.map