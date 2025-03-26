// jab 2015 me ES6 aya to js me kaafi saare new features and functions add hue jinme se ek arrow function hota hai
// Myth : arrow function me this ni hota 
const hello = () =>{
    let username = "Parveen"
    console.log(username)
    console.log(this)   //unlike function which returns a lot of information, it will print {}
}
hello()

// Implicit and Explicit return
const arrow1 = (num1,num2) => {
    return num1+num2
}
console.log(arrow1(2,4))
// ye explicit return hai jab hum curly braces use krte hai toh return keyword compulsory hai likhna

const arrow2 = (num1,num2) => num1+num2 // it can be written as (num1,num2) => (num1+num2) jo ki react me bohot use hota hai
console.log(arrow2(5,6))

const arrow3 = () => ({usernmae:"Parveen"}) //object ko return krne k lie use () me wrap krna compulsory hai
console.log(arrow3())