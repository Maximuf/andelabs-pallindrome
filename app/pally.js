'use strict'
const pally = {
	pali(str) {
		if(typeOf str !== "string") {
			const msg = "Invalid Input, Expecting a string!"
			return msg;
		}
		let str_split  = str.toLowerCase();
		str_split = str_split.replace(/[\W_]/g,"");
		const final = str_split.split("").reverse().join("");
		if(str_split === final){
			return true;
		} else {
			return str_split;
		}
}
}
module.exports = pally;