let hero1 = ["spiderman","batman","ironman"]
let hero2 = ["superman","Thanos","Shaktiman"]

// At(index)

console.log(`at() : `,hero1.at(-1))

// Push - when we push an array element it adds the new element as subarray means 2d array type bna deta hai , concat nahi banata
hero1.push(hero2);
console.log(`push : `,hero1)

hero1.pop()
console.log(`pop : `,hero1)

//Concat - returns a new Array and doesnot make change to original array like push

let hero3 = hero1.concat(hero2)
console.log(`Concat : `,hero3)

// using ... spread
let hero4 = [...hero1, ...hero2]
console.log(`hero4 is `,hero4)

// Flat(depth) func - makes one array into different levels base on depth given, does not make change to original array

let hero5 = ["a","b",["c","d"],"e",["f","g",["h","i"]]]
hero5.flat(1)
console.log(`hero5 : `,hero5.flat(Infinity))

// let hero6 = hero4.concat(hero5)
// console.log(`hero6 : `,hero6)



//from() - create an array from array like objects
let name = "Parveen"
let num = 12312
console.log(Array.from(name))
console.log(Array.from(num))


//isArray()
console.log(Array.isArray(name))

//findIndex
// console.log(hero1.findIndex("ironman"))

//Array.of(elements) - just a way to create array , alternative is to use []
let newArr = Array.of(40)
console.log(newArr)