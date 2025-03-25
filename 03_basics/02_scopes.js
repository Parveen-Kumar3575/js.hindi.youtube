//scope means {} block and defines accesibility of a variable 
//scope example : jaise chhote bado ki icecream le sakte hai but bade chhote ki nahi
//waise hi local global ko access kar sakta hai but global local variables ko access nahi kar sakta 
// var ki jagah let and const isi lie aaye kyuki : 
// 1)isme var hmesha global hi hota hai chahe wo block me ho ya nahi,
// 2)aur redeclare krne pr koi error nahi ata var ko 

var c = 300
let d = 100
if(true){
    let a = 10;
    const b = 20;
    var c = 30; // redeclare
    d = 150
}
// console.log(a) It will give error : a is not defined
// console.log(b)  ReferenceError: b is not defined
console.log(c)  //Var will not return any error
console.log(d)

/*****Interview : Sir ne bola hai ki global ka scope jabhum node environment me run krte hai to wo alag hai aur jab hum inspect window
k console me krte hai to wo alag hota hai .......Wo sir btaenge */