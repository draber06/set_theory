const { negation, disjunction } = require("../math_objects");
const { implication_args } = require("../abbreviations/implication");
const S3 = require("../schemes/S3");
const C1 = require("./C1");
const C8 = require("./C8");

// Если A - соотношение, то
// A или (не A)
// есть теорема.

exports = module.exports = A => {
    if (A.is_ratio) {
        const ratio = disjunction(A, negation(A));
        if (!ratio.verity) {
            C8(A);
            let sc = S3(negation(A), A);
            C1(...implication_args(sc));
        }
        return ratio;
    }
};
