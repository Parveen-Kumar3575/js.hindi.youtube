// IF CONDITION
//shortcut key : shift+alt+down arrow to copy below

let age = 1;
if(age > 18) console.log("you are eligible"), console.log("You are eligible 2");
else if(age < 18) console.log("You are not eligible");
// this is called implicit scope -
//in which you dont need to write in {}, but it is very unprossional and dont use it aur semicolon; use krna jaruri hai (nahi bhi )

let character = 'i';
switch(character){
    case 'a' : // yeha agr string ya char hai to case sensitivity ka dhyan dena
            console.log(`vowel a`);
    case 'e' : 
            console.log(`vowel e`);
    case 'i' : 
            console.log(`vowel i`);
    case 'o' : 
            console.log(`vowel o`);
    case 'u' : 
            console.log(`vowel u`);
    default : 
            console.log("Default");
    
}

let str = "false"
//agr ye false k equal nahi hai tabhi execute krna , agr equal hai tab execute nahi krna 
if(str != false){ // dekh yaha compare krne pr differently behave kr ra hai niche jab hum sirf simply likhenge tab ye true return krega kyuki comparison -
                    //  me implicit conversion hoti hai 
    console.log("str false k equal nahi hai tabhi execute hoga");
}
if(str) console.log("str is true here")


// Array with if
let arr = [];
if(arr) console.log("arr is empty");
if(arr.length == 0) console.log("arr is empty 2");//ya fir aese bhi likh skte hai

//Object with if
let obj = {};
if(obj) console.log("Object is empty");
if(Object.keys(obj).length == 0) console.log("Object is empty 2");
// object does not have property length then how we are using it here ? 
// because isme hum length property islie use kr pa re hai, kyuki Object.keys(obj) keys ka array return krta hai islie
// console.log(obj.length) returns undefined

/** NULLISH COALESCING OPERATOR(it only considers null and undefined otherwise it gives default values)
 
Use -   it is basically use when we want to handle the null values which may come from backend when we fetch data

chatgpt - The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined.
It does not consider other falsy values (0, "", false, NaN) as nullish.

*/


let num1 = " " ?? "val1"
console.log(num1)    //returns space
let num2 = null ?? 5;
console.log(num2)

/* ++++++++++++++++++++++++ Interesting +++++++++++++++++++
isse chhod k sab truthy hais
Falsy values :-
false,  0,  "", -0, BigInt 0n, null , undefined, Nan



koi bhi value ho string me to wo true hai , bas wo empty ni hona chaiye "" agr isme space hogi tab bhi true hi hoga " " ye true hai 
aur empty object,empty array,empty function ye bhi true hai 

truthy values :-
"false"," ",{} empty object, [] empty array, function(){} empty function

*/
