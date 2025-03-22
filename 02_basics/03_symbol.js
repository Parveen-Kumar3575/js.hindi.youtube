//Symbol ek primitive datatype hai , ye immutable hai
// ye accidental overwrite hone se bachata hai object ki properties ko , jaise agar hum third party code ko add kare tab
//Symbol immutable hai matlab uski description change nahi  ho skti but jis variable me store hua hai wo dusre ko point karne lgega
// It works like hidden value and does not show when we iterate through for-in loop
let point = Symbol("change");
point.description = "change2";
console.log(point); // Ouput : Symbol("change")

point = Symbol("change2")
console.log(point)  // Ouput : Symbol("change2") ** description change nahi hui hai , refernce change hua hai variable "point" ka 

let age = Symbol("age original : ");

console.log(age);
console.log(age.description);   //Use to print the text inside () which is called value or description and access using .description property


let obj = {
    name : "Parveen",
    Lname : "Kumar",
    //[age] : 21          // ye symbol ki value hai aur symbol variable ko sirf [] me hi likh skte hai object k andar
}

obj[age] = 21;
console.log(obj);
console.log(obj.age);   // Symbol cannot be accesed by . (dot) we have always use [] otherwise always return undefined
console.log(obj[age]);

// **Symbols cannot be with for in looop kyki ye ek hidden value ki trah kaam krta hai 
console.log("Loop -------------");
for(key in obj){
    console.log(key);
}

let id1 = Symbol("id");
let id2 = Symbol("id");
let obj2 = {
   [id1] : 101,
    [id2] : 102,
    name : "Parveen"
};
console.log(obj2[id1]);
console.log(obj2[id2]);

let obj3 = {
    [Symbol("id")] : 101  // Alag  hai unqiue aur new 
 }
 console.log(obj3[Symbol("id")])  // Undefined, kyuki ye naya hai unique aur new , thats why we store in variable 
 /* ye undefined dega kyuki jab bhi hum [Symbol("desc")] likhte hai to wo ek naya unqiue symbol bna -
  deta hai  matlab jo symbol object me hai wo alag symbol hai aur jo hum print krwa rahe hai wo alag symbol hai 
  isilie wo undefined dera hai */
  //done