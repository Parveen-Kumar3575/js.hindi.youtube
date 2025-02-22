console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
//**This is because in this comparrison null conversion behaves differently with equality (==) and comparison operator(<,>,<=,>=) */

console.log(undefined == 0); //always false
console.log(undefined <= 0);