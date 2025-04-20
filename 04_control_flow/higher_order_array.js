// for of loop - iterable value(Arrays,strings,Maps,Sets)

// for in loop - iterates over (Arrays,objects) returns index or property name => Key specific

let user = {
    name : "Parveen",
    age : 21
}
// for(let val of user){
//     console.log(val)         **gives error
// }                            
for(let val in user){
    console.log(val);
}



//--On strings
let str = "Parveen"
// for(let val in str){
//     console.log(val)    //returns index
// }

// for(let ch of str){
//     console.log(ch);    //returns characters
// }


//MAPS
// 🔹 What are Maps in JavaScript?
// A Map is a built-in object in JavaScript that stores key-value pairs — just like an object — but with enhanced features.
// It was introduced in ES6 (ECMAScript 2015) to overcome limitations of plain objects.

// Maps vs objects
// 1) object can have only strings and symbols as keys whereas maps can have strings, boolean , integer etc.
// 2) object ki size calaculate krni padti hai aur maps ka size property hota hai
// 3) map ka insertion order same rehta  hai unlike object



let mapss = new Map();
mapss.set("a" , "apple");
mapss.set("b" , "ball");
mapss.set("3" , "Three");
console.log(mapss);

console.log("Map  order -- ");
for(let [key,value] of mapss){
    console.log(key,value);
}

console.log("Object order -- ");
let oo = {
    "a" : "Ant",
    "b" : "Box", 
    "3" : "Three"
}
for(let key in oo){
    console.log(key,oo[key])
}

// Dekho upar jo integer die hai as key.... object k case me wo pehle itereate ho rahe hai, jabki humne use bad me bnaya hai
//  aur string wali keys baad me print hori hai jabki humne pehle bnaya hai 

// jabki maps me bilkul sahi order me iterate hora hai , pehle bnaya wo pehle aur baad me bnaya to baad me 

console.log(mapss.get("3"))
console.log(oo["b"])