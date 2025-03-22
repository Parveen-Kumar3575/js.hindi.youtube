//Learning - objects methods-create,assign,object.keys,object.values,object.entries         2)Merging of objects
//3) array of objects       4) Nested Objects 

// Creating object by constructor

let obj = new Object();
obj.name = "Parveen"
obj.Lname = "Kumar"
obj.id = 123
obj.isLoggedIn = true

let obj1 = {
    1 : 'a',
    2 : 'b'
}
let obj2 = {
    3 : 'ab',
    4 : 'ba'
}

//Merging of Two objects in different ways give different result 
let obj3 = obj1+obj2    // just give array of object object , dont opens the objects just add it from above
let obj4 = {obj1,obj2}  // creates a single object with two sub-objects - obj1 and obj2

//-------Object.assign()
// syntax : Object.assign({},obj1,obj2......)
//We should always give first parameter {} otherwise the function will add and replace all the objects gives in para,means final result sabke andar store hojega
// hum to bas add krna chahte the but wo pure list ko hi modify krdega instead of adding ISS CHIZ KO AVOID KRNE K LIE {} USE KRNA BOHOT IMP HAI

let oo = {
    5 : "e",
    6 : "f"
}
let obj5 = Object.assign({},obj1,obj2) // gives accurate result merges two objects, NOTE : common keys are merge and represent as single key 
//console.log(obj1)  changed without {}

let obj6 = {...obj1,...obj2}    // better than Object.assign , THIS IS COMMON IN USE FOR DEVELOPERS
console.log("Add : ",obj3)
console.log("Comma : ",obj4)
console.log("Object.assign : ",obj5)
console.log("Spread : ",obj6)





//Nested Objects
let nestedObject = {
    fullname : {
        firstName : "Parveen",
        lastName : "Kumar"
    }
};
console.log(nestedObject.fullname.firstName);
console.log(nestedObject.fullname.lastName);



// Arrays of Objects

let arr = [
    {name : "Parveen", Lname : "Kumar"},{name : "Ravi", Lname : "Sharma "}
];
console.log(arr[0].name);
console.log(arr[1]['Lname']);

//IMPORTANT OBJECT FUNCTIONS
console.log(Object.keys(arr));  //Object.keys(objName) returns array of keys
console.log(Object.values(arr)); //Object.values(objName) returns array of values
console.log(Object.entries(arr));   //Object.entries(objName) returns key-value pairs
console.log(obj1.hasOwnProperty('1'))   //returns true or false

//Isme protype ki jagah koi object aata hai aur wo inherit krta hai jisse acces kia ja skta hai na ki copy krta hai 
//object.create(prototype,propertiesObject) 
//prototype- Object to be copied , we can give {} also
//propertiesObject - additional properties which we want to add , ek format me kar skte hai - keyName : (value : "",writable: T/F,enumerable : T/F)
//writable matlab ki change ho skti hai ya ni , if true then can be change , by defaulut false
//enumerable matlab for-in loop me hidden hogi ya nahi , if true then it will show

let createObj = Object.create(obj,{
    age : {value : 21,enumerable : true},
}
)
console.log(createObj)
console.log(createObj.name)