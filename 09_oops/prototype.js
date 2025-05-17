function firstTest(fName,num){
    this.fName = fName
    this.num = num
}


firstTest.name2 = "Parveen"
console.log(firstTest.name2)
//console.log(firstTest.prototype)  returns {} empty object


// hum above function k protoype me apni properties ya methods b add kr skte hai jaise -
firstTest.prototype.increment = function(){
   let temp = ++this.num
   return temp
}


firstTest.prototype.printme = function(){
    console.log(this.fName)
    // yha this(matlab jis ne call kia - "jis") current context k lie krte hai taaki wo current constructor func ko point kare 
}

/* 
******
jab hum prototype se apne kuch function ya property  define krte hai to wo automatically prototype k andar inject nahi hota hume use 
krna hota hai , aur ye kaam hum "new" keyword ka istemaal krke krte hai 

*/
const userOne = new firstTest("Parveen",12)
const userTwo = new firstTest("Kumar",11)

console.log(userOne.increment())
console.log(userTwo.increment())

//printme function
userOne.printme()
userTwo.printme()
