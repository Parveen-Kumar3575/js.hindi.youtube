/* Higher order function are those which -
 1) takes another function as argument
 2) returns a function 
 3) calls another function inside it

 Why they are called higher order functions ?
 - They are called "higher-order" because they operate on other functions  --
   either by accepting them, returning them, or both. 

Note : Recursion is not higher order function because it calls itself and not involves other function but higher order func involves other func

*/

//Array internally object ki trah store hote hai jaha keys index number hoti hai aur values jo hum dete hai, thats why its typeof is object
// for in loop hmesha array ki keys(index) return krta hai  na ki values , balki for in loop values deta hai 

let arr = [10,20,30,40,50];

for(let num in arr){
    console.log(arr[num]);
}


let str = "abc"
for(let st in str){
    console.log(str[st]);
}



// Callbacks - it is basically a function which is  called in another function , it can be named or anonymous
// forEach - it is an loop which is method and takes callback as argument and calls that callback for each element in the array
console.log("For Each loops -")
arr.forEach(function ee(items){
    console.log(items)
})
/* - forEach is a higher-order function that automatically calls the function you pass to it.
   - It internally loops through each element of the array and invokes your callback function, passing the current item as an argument.
   - The name ee here is optional and unused unless you want to call ee inside the same scope (e.g., recursion).

 */
console.log("By Arrow callback - ");

let arr2 = ["Parveen","Navin","Shrenu","Keenu","Meenu","Renu"]
arr2.forEach((item) =>{
    console.log(item)
})

//Upar kya hua ki jo item para hai usme ek-ek krke arr2 k saare elements aate gye aur print hote gye

console.log("Separtely creating and calling functions - ")
// if we create function separtely and then using it as callback , then we have to pass the reference of the function and not execution
// Like below - arr.forEach(eleme()) is wrong we have to pass the reference arr.forEach(eleme)
function eleme(item){
    console.log(item);
}

arr.forEach(eleme);
// arr.forEach(eleme()); it is wrong 


/* Error part 
let obj = {
    name : "Parveen",
    age : 19
}

obj.forEach(eleme);

*/



// For Each aur bhi access deta hai array ka , basically 3 chizo ka access
// 1) Item - Means each element of array (jo upr dekhlia)
// 2) Index - Means index number
// 3) ArrayList - means puri array k list ka access

arr2.forEach((item,index,list)=>{
    console.log(item,index,list);
})

let arrObj = [
    {
        name : "javascript",
        file : "js"
    },
    {
        name : "java",
        file : "java"
    },
    {
        name : "c++",
        file : "cpp"
    }
];

arrObj.forEach((item)=>{
    console.log(item.name);
})

