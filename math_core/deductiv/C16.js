const { negation } = require("../math_objects");
const implication = require("../abbreviations/implication");
const { implication_args } = require("../abbreviations/implication");
const S3 = require("../schemes/S3");
const S4 = require("../schemes/S4");
const C1 = require("./C1");
const C10 = require("./C10");

// Если A - соотношение, то
// (не не A) влечёт A
// есть теорема.

exports = module.exports = A => {
    if (A.is_ratio) {
        let neA = negation(A);
        let neneA = negation(neA);
        let neneneA = negation(neneA);
        let ratio = implication(neneA, A);
        if (!ratio.verity) {
            let sc = S4(neA, neneneA, A);
            C10(neneA);
            C10(A);
            C1(...implication_args(sc));
            C1(...implication_args(implication_args(sc)[1]));
            sc = S3(A, neneneA);
            C1(...implication_args(sc));
        }
        return ratio;
    }
};
