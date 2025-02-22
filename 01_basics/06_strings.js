let str = "Parveen"
console.log(str[2]);

let str2 = new String("Parveen Kumar") // strings as objects
console.log(str2);
console.log(str2.__proto__);

let strr = str;
strr = "kumar";
console.log(`str is ${str} , strr is ${strr}`)
let str22 = str2;
str22 = new String("Parveen Verma")
console.log(`str2 is ${str2 } str22 is ${str22}`);


console.log("+++++++++++++++++++++++++   String Functions   ++++++++++++++++++++++++++++++++++++++++")
console.log(`Parveen`.toUpperCase());
console.log(`PARVEEN KUMAR`.toLowerCase());
console.log(`       ppp       `.trim());
console.log(str22.valueOf());
console.log(`      pp   22222`.trimStart());
console.log(`    gg     `.trimEnd());
console.log(`Parveen kumar`.substring(0,-1))
console.log(`Parveen kumar`.slice(0,-1));

console.log(`Parveen kumar`.startsWith('PR'));
console.log(`Parveen Kumar `.endsWith("ar "));
console.log(`Parveen Kumar`.search(`ar`));
console.log(`Parveen Kumar`.replace(`Kumar`,`Verma`))

let digits = "23942937893478237"
let last4 = digits.slice(-4);
let fin = last4.padStart(digits.length,"*");
console.log(fin);

let first4 = digits.slice(0,4);
let fin2 = first4.padEnd(digits.length,"*");
console.log(fin2);