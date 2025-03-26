// this keyword current context(variable ya object) ko refer krta hai 
//Myth : arrow function me this nahi hota 

let obj = {
    name : "Parveen",
    age : 21,
    greet : function(){
        console.log(`userName : ${this.name} and age : ${this.age}`);
       // console.log(this)     it points to obj and prints full object details but not now(means not at object creation time)
    },
    /*  iss part ko sabse niche smjhaya hai acche se 
    Outerthis : this,       //output : {} refers to global object which is {} in node
    test : `name is ${this.username} age : ${this.age}`  undefined undefined for both values*/
}

// console.log(obj.test)


function hello(){
    let username = "Kumar"
    console.log(this.username)      //returns undefined because this does not point to function
    //console.log(this);     returns a lot of details
}
hello()




/*console.log(this);
above statment will give {} means blank value and not points to anything
but if we do it in browser then it will point to window object 
*/


//++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++
/*
why "this" inside function points to object and outside function it does not refer to object ?
In JavaScript, when a function is called as a method of an object (e.g., obj.greet()), this inside the function is automatically set to the object that called the method.
matlab jab bhi this refer krta hai object ko to wo object creation k time pr nahi krta ,balki jab hum use obj.greet() se call krte -
hai uss time wo "obj" ko refer krta hai ,"greet" jo hota hai "obj" k sath dot laga kr access kia jata hai to greet obj ko refer krta hai

ab outer wale isss lie nahi krte kyuki ---
hum unhe object creation k time pr access kr re hai aur obj abhi exist hi nahi krta 
function to tab call hora hai jab object create ho chuka hai 

When obj is being created, this is evaluated immediately.

At that moment, obj does not exist yet, so this refers to the surrounding execution context (global scope).
*/

