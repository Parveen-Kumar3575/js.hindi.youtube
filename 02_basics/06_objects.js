//Destructuring : arrays or objects

let obj = {
    name : "Parveen",
    Lname : "Kumar",
    age : 18,
    School : "Gyandeep"
}

/*
Suppose if i want to acces School property then i can acces it as obj.School
but if we have to print it again and again we can write store it in variable and then print it 
we destructure the object;
Syntax of destructuring : 
let {propertyname} = objectName
let {propertyname : newpropertyName[optional]} = objectName
Generally, we use it during API data fetching where data comes in json (key,value pair) or array of objects ,before it use to come in XML

*/


let {School : newSchoolName} = obj;
//This is quivalent to newSchoolName : obj.School
// console.log(School);
console.log(newSchoolName);


//Nested objects destructuring 
let user = {info : {firstName : "Parveen",lastName : "Kumar"}};
let {info : {firstName : fname}} = user;
console.log(fname);
/*
let { info["firstName"]: fname } = obj; is incorrect
info["firstName"] is not a valid destructuring pattern because destructuring works with property names directly, not expressions.

*/



//Basically it is oppsoite of assignment for ex-
let arr = [10,20,30];  //the way we assign 
let [a,b,c] = arr;      //the way we fetch
console.log(`A : ${a}`)
console.log(`B : ${b}`)
console.log(`C : ${c}`)

//Default Values
const [x = 1] = []; // a is 1
const { y = 2 } = { b: undefined }; // b is 2
const { z = 2 } = { c: null }; // c is null