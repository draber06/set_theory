const implication = require("../abbreviations/implication");

exports = module.exports = (A, B) => {
	if (A.is_ratio && B.is_ratio) {
		if (!B.verity) {
			let C = implication(A, B);
			if (A.verity && C.verity) {
				B.proof = [A, C, B];
			}
		}
		return B;
	}
};