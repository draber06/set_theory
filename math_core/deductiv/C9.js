const negation = require("../math_objects").negation;
const implication = require("../abbreviations/implication");
const C1 = require("./C1");
const C7 = require("./C7");

// Если A - соотношение, а B - теорема, то 
// A влечёт B
// есть теорема. 

exports = module.exports = (A, B) => {
    if (A.is_ratio && B.is_ratio && B.verity){
        let sc = implication(A, B); 
        if (!sc.verity){
            C7(negation(A), B);
            C1(B, sc);
        }; 
    };
};