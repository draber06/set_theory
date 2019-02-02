const disjunction = require("../math_objects").disjunction;
const implication = require("../abbreviations/implication");
const S2 = require("../schemes/S2");
const S3 = require("../schemes/S3");
const C6 = require("./C6");

// Если A и B - соотношения , то 
// B влечёт (A или B)
// есть теорема .

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio){
        let sc = implication(B, disjunction(A, B)); 
        if (!sc.verity){
            S2(B, A);
            S3(B, A);
            C6(B, disjunction(B, A), disjunction(A, B));
        }; 
    };
};