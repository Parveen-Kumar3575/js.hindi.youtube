/*

string,array,function sab object k through hi hokar gujarte hai agar hum in teeno me koi property ya method add krna chahte hai to 
hum inke objects k prototype ko access krke ye kr skte hai jisse object me add ki gai chize teeno me reflect ho jayengi

but agar humne koi method add kia hai array k prototype me to wo usi tak limited rahega wo function ya string me reflect nahi hoga

*/

const array = ["Parveen","kumar"]

const user = {
    fName : "Apple",
    Grad : "B"
}

function func(){
    console.log("ye function h bhai --")
}
// ye sabme reflect hoga including function
Object.prototype.greet = function(){
    console.log("Greet reflect in every object")
}

// ye sirf array me reflect hoga 
Array.prototype.arrayFunc = function(){
    console.log("Array ka protoype ")
}

user.greet()
array.greet()
array.arrayFunc()
// user.arrayFunc() ye error throw krega 

// func.greet()




//**** Prototype inheritance 

const fruit = {
    fruit1 : "banana",
    fruit2 : "Grapes",
    fruit3 : "Litchi",
    fruit4 : "Mango"
}

const vegetable = {
    veg1 : "Potato",
    veg2 : "tomato",
    __proto__ : fruit   // inherited using __proto__ keyword 
}

const junk = {
    junk1 : "chips",
    junk2 : "samosa"
}


// acessing fruit properties by vegetable
console.log(vegetable.fruit1)


// but above syntax is messy below syntax is use in modern js - extend vgerah use hota hai but wo syntactic sugar hai behind the scene 
// aese hi hota hai sab 

//************** syntax - Object.setPrototypeOf(child,parent) */
console.log("Modern inheritance syntax ----------")

Object.setPrototypeOf(junk,vegetable)

console.log(junk.veg2)
console.log(junk.fruit3)    // multilevel inheritance


// dekho ab hum aesa function banan chahte hai jo kisi string ki length ko count kare bina uske extra trailing ya leading spaces ko count kare
// basically ek trueLength naam ka method jo trim+length ka combo hoga , isse sab par manually call kr skte hai but ye sai nahi hai

let introName = "My name is Pabbi        ";

String.prototype.trueLength = function(){
    console.log(this)   // ye name k andar ki value ko point krega kyuki usi ne call kia hai, jo call krega use point krega
    return this.trim().length   // ab uski value pr action perform krke return  krdia 
}

console.log(`length is : ${introName.trueLength()}`)