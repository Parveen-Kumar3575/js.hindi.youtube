let fDate = new Date();
console.log(fDate);
console.log(fDate.toString());
console.log(fDate.toDateString());
console.log(fDate.toLocaleDateString('en-In'));
console.log(fDate.toISOString());
console.log(fDate.toJSON());
console.log(fDate.toLocaleTimeString(`en-In`))

let myCreatedDate = new Date(2023,2,30);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString('en-In'))

let timeStamp = Date.now()
console.log(myCreatedDate.getTime());
console.log(timeStamp)
console.log(Math.floor(timeStamp/1000))

console.log(timeStamp.toLocaleString())
console.log(myCreatedDate.toLocaleString())
console.log(timeStamp.toLocaleString('default',{
    weekday : "long"
}))