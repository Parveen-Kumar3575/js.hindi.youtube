// Object ek non-primitive datatype hai in which data is stored in key value pairs
// object can be created in two ways - by constructor , by literal
// when we create object through constructor then singleton object is created
//when we create object through literal then singleton object is not created 
//two symbol cannot be same even if the description of Symbols is same


// By literal
let obj = {
    name : "Parveen",  // Internally name is stored as "name" (as string)
    age : 21,
    "full name" : "Parveen Kumar",    // No way to access through .
    email : "parv@gmail.com",
    location : "Chandigarh",
    isLoggedIn : true,
    loggedDays : ["Monday","Tuesday","Wednesday"],
    greeting2 : function(){
        console.log(`Hello : ${this.name}`);
    }
}

//objects value can be access in two ways : by . (dot) and by []
// . is not preffered professionally , [] must be use 
console.log(obj.name)
console.log(obj.age)

// It would give error : console.log(obj[name]);
console.log(obj["name"]);

console.log(obj["full name"]);
// Genrates error : console.log(obj."full name");

let id = Symbol("id");
let id2 = Symbol("id");
let obj2 = {
    name : "Parveen",  // Internally name is stored as "name" (as string)
    age : 21,
    "full name" : "Parveen Kumar",    // No way to access through .
    email : "parv@gmail.com",
    location : "Chandigarh",
    isLoggedIn : true,
    loggedDays : ["Monday","Tuesday","Wednesday"],
    [id] : "a",
    [id2] : "a"    // symbols can only be define inside object by putting the variable in []
}
console.log(obj2)

Object.freeze(obj2) // Freeze function is use to freeze the modification of an object
obj2.name = "Verma"
console.log(obj2)

// Functions in object
obj.greeting = function(){
    console.log("Hello World With : ");
}
console.log(obj.greeting)   // returns function(anonymous)
obj.greeting()  // calls the function greeting

obj.greeting2() 

//done