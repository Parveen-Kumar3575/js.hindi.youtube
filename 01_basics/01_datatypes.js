"strict type"; //treat all code as a newer version 

let name = "Parveen"
let age = 20
let status = true
let weather = null // null is a standalone value
// symbol is also a unique dataype which is mainly use in javascript
let xyz;
// alert(3+3) 
console.log(typeof name);
console.log(typeof weather);
console.log(typeof xyz);
console.log(status);



// PRIMITIVE DATATYPES
console.log("------------------------------------------");
let num = 10;
let str = "parveen"
let Bool = true
let emp = null
let undf;
let symbol = Symbol("abc")
let Big = 102910931298932921839219n

console.log(typeof num)
console.log(typeof str)
console.log(typeof Bool)
console.log(typeof emp)
console.log(typeof undf)
console.log(typeof symbol)
console.log(typeof Big)

let func = function(){
    console.log("Hello World");
}

let obj = {
    name : "Parveen",
    class : 8
}

let obj1 = obj ;
console.log(obj);
 obj1.name = "Kumar";
 console.log(obj);
let arr1 = [10,20,30,40];

console.log(typeof func)
console.log(typeof obj)
console.log(typeof arr1)