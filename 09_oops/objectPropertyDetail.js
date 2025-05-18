/*

Important interview question - kya hum PI ki default value change kr skte hai js me ?
AND =>  Nahi, aur constant hai ye to reason hai hi but uski internal details ko jan na kaafi jaruri hai 

har ek jo property ya method kisi inbuilt object ka (jaise Maths) usli kuch internal me restriction di hui hai jaise enumerable,configurable
iterable,writable , ye jo properties hai inbulit object ki wo bohot strictly di gai hai c++ k through jisse hum change nahi kr skte 

aur jo PI hai uski internal me bhi writable false hai jo ki possible ni hai change krna 

hum khud ki banai gayi object ki properties ko b aesi restriction de skte hai 

Two Main Methods :-
1) Object.getOwnPropertyDescriptor(objectName, "Propertyname")  // returns detail of property
2) Object.defineProperty(objectName, "propertyName", {  // we can set the property
    writable : t/f
    enumerable : t/f
    })
*/

console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

// Throws error because c++ ne isse strictly likha hai 
// Object.defineProperty(Math,"PI",{
//     writable : true
// })

const obj = {
    name : "Parveen",
    password : "abc123",
    standard : "BCA",
    greet : function(){
        console.log("Hello object")
    }
}

Object.defineProperty(obj,"name",{
    writable : false,
    enumerable : false
})


console.log(Object.getOwnPropertyDescriptor(obj,"name"))

//name enumerate ya iterate nahi hoga 
for(let [key,value] of Object.entries(obj)){

    if(typeof value !== 'function') // ye condition function ko enumerate nahi kregi - real life me aese krte hai hum use 
    {
    console.log(`${key} : ${value}`)
    }
}



// obj.name = "kumar"   ye statement error ni dega pr assignement value reflect hi nahi hoga 
// console.log(obj)

// console.log(Object.getOwnPropertyDescriptors(obj)) takes object and returns detail of all properties 
