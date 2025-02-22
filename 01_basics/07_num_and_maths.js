const score = 400
console.log(score);

const num = new Number(30);
const num2 = new Number(3247823423);

console.log("+++++++++++++++Number Methods  ++++++++++++++");
console.log(num);
console.log(num.toString().length);
console.log((3247823423).toLocaleString('en-IN'));
console.log(num.toFixed(5));
console.log(num.toPrecision(3))

console.log(" ++++++++++++    Maths Methods +++++++++++++++++++++++");
console.log(Math.sqrt(2));
console.log(Math.pow(2,2));
console.log(Math.round(4.5));
console.log(Math.abs(-2))
console.log(Math.ceil(3.3))
console.log(Math.floor(3.9))
console.log(Math.min(2,3,4,5,6,7))
console.log(Math.max(1,2,3,4,5,6,7,8,9))


console.log("Random Functions")
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.trunc(Math.random()*10 + 1))

//Formula for random Is Important
let min = 10
let max = 30
console.log(Math.trunc(Math.random()*(max - min +1))+ min)