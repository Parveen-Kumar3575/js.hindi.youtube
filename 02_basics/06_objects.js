let obj = {
    name : "Parveen",
    Lname : "Kumar",
    age : 18,
    School : "Gyandeep"
}

//Suppose if i want to acces School property then i can acces it as obj.School
//but if we have to print it again and again we can write store it in variable and then print it 
//we destructure the object;
//Syntax of destructuring : 
// let {propertyname} = objectName
//let {propertyname : newpropertyName[optional]} = objectName
//Generally, we use it during API data fetching where data comes in json (key,value pair) or array of objects ,before it use to come in XML

let {School : newSchoolName} = obj;
// console.log(School);
console.log(newSchoolName);