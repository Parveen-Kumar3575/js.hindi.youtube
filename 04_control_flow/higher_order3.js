/* Learning - filter , reduce and maps
- filter()
- Used to filter elements based on a condition.
- Returns a new array with elements that pass the test.
- Used when you want to extract a subset of an array.

Foeach does not have capability to return any value , if we want to get subarray from it then we have to push that inside the callback
*/

let test = [10,20,30,40,50,60,70,80,90,100];

let newTest = test.filter((item) => item>40);
console.log(newTest);

let newTest2 = [];

test.forEach((item) =>{
    if(item > 50){
        newTest2.push(item);
    }
})
console.log(newTest2);

// Exercise 

let books = [
    {title : "First", genre : "Fiction", publish : 2000, edition : 2002},
    {title : "second", genre : "non-Fiction", publish : 2005, edition : 2012},
    {title : "Third", genre : "History", publish : 2011, edition : 20024},
    {title : "Fourth", genre : "History", publish : 2020, edition : 20025},
    {title : "Fifth", genre : "Science", publish : 200, edition : 2019},
    {title : "sixth", genre : "Science", publish : 2010, edition : 2018}
]

// Q - filter books which has genre history
let newBooks = books.filter((single) => single.genre === "Science");
console.log(newBooks);

// Q - Books publish after 2000
let oldBooks = books.filter((single) => single.publish > 2000);
console.log(`After 2000 -`,oldBooks);


/* .maps()
map vs filter
- map jo hota hai wo sab par iterate krega aur jo original arr hai aur map lgane k baad b arr ki length same rahegi
- jabki filter sirf kuch array elements ko return krega jo ki condition satisfy krega

*/
let newArray = test.map((num) => num*2);
console.log(newArray);


// Method chaining -
// jaise niche pehle ye first map k through jayega fir first map ka result element second map me jayega aur fir second map ka result 
// third filter me jaega waha se fir final result return hoga

let nums = [1,2,3,4,5,6,7,8,9,10];
 
console.log("----Method Chaining ----")
let newNum = nums
                .map((el) => el*10)
                .map((el) => el+1)
                .filter((el) => el>40);

console.log(newNum);


//REDUCE function -  
// basically 2 para hote hai isme pehla accumaltor , dusra item, aur callback k baad hum initial value dete hai 

let total = nums.reduce((acc,item)=> (acc+item), 100);
console.log(total);


