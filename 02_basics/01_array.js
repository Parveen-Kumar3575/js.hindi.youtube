// types to declare arrays 
// Arrays are mutable in js and they are object when we create array with [] js internally defines it as an object 
// Arrays can contain mix of datatypes 
// js does not have associative arrays
// arrays copies are shallow copies in js

//-----Shallow and Deep Copy  --------------

// When we copy an array in another variable and make changes to any one of that variable it make changes in both array
// and this is called shallow copy in which the original and copied object points to same memory and are created by references

// Deep copy in which objects are copied by value which means if u copy array and make change to original or copy it wont affect each other
// To deep copy we can use structuredClone(obj)



let arr1 = [10,20,30,40,50,60]
let arr2 = new Array(70,80,90,100);
console.log(`arr1 is ${arr1}`)
console.log(`arr2 is ${arr2}`)

//Shallow copying copying array
let arr3 = arr2;
console.log(`arr3 is ${arr3}`)

arr3.push(110,120);
console.log(`arr2 is ${arr2}`)
console.log(`arr3 is ${arr3}`)

arr3.pop()
console.log(`arr2 is ${arr2}`)
console.log(`arr3 is ${arr3}`)

//Shift
arr1.shift();
console.log(`arr1 : ${arr1}`)

//Unshift
arr1.unshift(10)
console.log(`arr1 unshift : ${arr1}`)

//New Arrays 
let ran1 = [1,2,[3,4]];
let ran2 = structuredClone(ran1) // use to make deep copy
console.log(`ran1 : ${ran1}`)
console.log(`ran2 : ${ran2}`)
ran1[0] = 5
console.log(`ran1 : ${ran1}`)
console.log(`ran2 : ${ran2}`)


// --------- Slice and Splice
// Slice(start index, end index) it does not make change to original array, and does not include the last index which we give
// splice(start index, length ) it make chnages to original array and first index is starting and second para is length


console.log(arr1)
console.log(arr1.slice(1,4))
console.log(arr1)

console.log(`----Splice`)
console.log(arr1.splice(1,4))
console.log(arr1)


// More Function includes,indexOf,join
console.log(arr1.includes(20))
console.log(arr1.includes(10))

console.log(arr2.indexOf(50))

// Array join does not return array but it returns string 
console.log(arr2.join("-"))