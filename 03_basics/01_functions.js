// function is like packing some instruction in block which can be call again and again
// jaise washing machine is a function jab hum kapde daalte hai aur wo dho kr deta hai 

/*
***Function will not do anything after returning a value
function ab(para1,para2){ body }


To call(ye react me kaafi kaam ayega niche wala) :
ab //This is reference of function
ab() //this is execution of function
jab hum () use kr dete hai to use execution of function bolte hai 
*/

function func(a,b){
    console.log(a+b+"Add First "); //printing
}
func(2,1)
function add(a,b){
    return a+b+"Add Second"
}
console.log(add(1,3))

function name(fname){
    return `Your name : ${fname}`
}

console.log(name("Parveen"))
//***console.log(name()) if we call without arguments then it will give undefined in that variable (means value nt given)



function name2(fname){
    if(fname == undefined){ //if(!fname) it same hai ye ,hum default value bhi de skte hai if(fname = "Parveen")
        console.log("Please Enter you name");
        return /*We return nothing when the name is not entered in argument and we are trying to end program by returning nothing,
                    the function will end because after return statment the function does not execute further*/
    }
    return `Your Name2 : ${fname}`
}
console.log(name2()) // output : Please enter your name ; (in second line)Undefined 
/*reason :
when the function does not return anything but defines "return" then the "return" will return undefined which will be prinetd by name2() calling */


//Function Taking objects and Arrays 
//Rest and spread(...) operator is changebut they have some functionality difference and depends where they r used
//ye saare arguments ko lega aur usse bundle kar dega ek array k andar
function takeArray(...arr){
    console.log(arr)
}
takeArray(1,2,3,4,5)

function takeArray2(num1,num2,...num3){
    console.log(`num1 : ${num1}, num2 : ${num2} and num3 : `,num3)
}
takeArray2(10,20,30,40,50)

//Function taking objects
function takeObjects(...anyObject){ //it will wrap object given object in array
    console.log(`Function object : `,anyObject)
}
// const obj = {
//     name : "Parveen",
//     age : 18
// }
takeObjects({name : "Parveen Kumar",age : 21})