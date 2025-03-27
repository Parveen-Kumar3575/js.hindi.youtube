// for of loop - iterable value(Arrays,strings,Maps,Sets)
// for in loop - iterates over (Arrays,objects) returns index or property name

let user = {
    name : "Parveen",
    age : 21
}
// for(let val of user){
//     console.log(val)         **gives error
// }                            
for(let val in user){
    console.log(val);
}


//--On strings
let str = "Parveen"
for(let val in str){
    console.log(val)    //returns index
}

for(let ch of str){
    console.log(ch);    //returns characters
}