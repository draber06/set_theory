const implication = require("../abbreviations/implication");
const disjunction = require("../math_objects").disjunction;


module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio){
        let ratio = implication(A, disjunction(A, B));
        ratio.axiom();
        return ratio;
    };
};