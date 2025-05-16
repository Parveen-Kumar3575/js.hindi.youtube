/*
promise create krne k lie uska object bnana hota hai jo ek function leta hai parameter me with two mandatory para-resolve,reject
uske baad hum un states ko handle krne k lie then aur catch use krte hai ,then ek function leta hai jo tab execute hota hai jab reolve hota
jaye , and catch jab error aaye . 

then ko call krwane k lie hume promise k function k andar resolve call krna padta hai then k sath link krne k lie 


promise basically async kaam k lie use hota hai - jaise db related ya network related 
*/
//BASICALLY NUMBERING KI HAI MAINE HAR NUMBERING ME ALAG CONCEPT HAI 


// 1) PROMISE CREATION THROUGH VARIABLE
let firstPromise = new Promise(function(resolve,reject){
    
    setTimeout(()=>{
        console.log("PRomise")
        resolve()   // ye then se connect krta hai 
    },1000)
    
})

firstPromise.then(()=>{
    console.log("Promise then done ")
})


// 2) PROMISE WITHOUT STORING IN VARIABLE 
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Naya promise hai ye ")
        resolve()
    },2000)
}).then(()=>{
    console.log("Naya promise 2")
})


// 3) SENDING DATA THROUGH RESOLVE- aur then ka callback ka parameter hai jo wo use accept kr leta hai 

let thirdPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3) console promise ")
        resolve({username : "Parveen third Promise"})
    },3000)
})

thirdPromise.then((data)=>{
    console.log(`3) data received :  ${data.username} `)
})


// 4) USING REJECT AND RESOLVE IN PROMISES

let fourthPromise = new Promise((resolve,reject)=>{
    let error = false;
    setTimeout(()=>{

        if(!error){
        console.log("4) console  ")
        resolve({username : "Parveen", class: "BCA"})
        }else{
            reject("Data rejected ")
        }},4000)

})

fourthPromise.then((data)=>{
    console.log("4) then first executed ",data.class)
    return data.username    // ye data return krega agr humne kisi var me store kia to nahi hoga ye returned data agle then k para me bhejta hai 
})
.then((username)=>{
    console.log(`4) ${username}`)
})
.catch((error)=>{
    console.log(`4) Error : ${error}`)
})
.finally(()=>{
    console.log("The fourth promise is either rejected or resolved ")
})



//  5) *********    ASYNC AND AWAIT **********

let promiseFive = new Promise(function(resolve,reject){
    
    let error = true
    setTimeout(()=>{

        if(!error){
        console.log("5) promise started ")
        resolve("5) promise resolved ")
        }else{
            reject("5) Promise rejected")
        }
    },5000)
})

//async matlab asynchronous fuction hai aur isme promise ka koi response aane wala hai 
async function promiseFiveFunc(){
  
    // reject hume catch k through hi handle krna padega 
    
    try{
        const response = await promiseFive // resolve pr use string milega aur reject pr usse error milega jo ki through hua hai
        console.log(response)
       }
       catch(e){
        console.log(e)
       }
}
promiseFiveFunc()


// Fetching data - fetch hmesha responseObject return krta hai resolve hone par (waise wo promise return krta hai )
// jise convert krte hai object me - response.json() se

async function fetchData(){

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users") // returns a promise
        let jsonResponse = await response.json() 
        throw new Error("Error has been thrown")   // await krana jaruri hai isme bhi time lgta hai 
        // console.log(jsonResponse)
    }catch(error){
        console.log("E : ",error)
    }
}

// fetchData()



//PERFORMING FETCH THROUGH THEN AND CATCH
// fetch ek promise return krta hai islie hum uspr then aur catch laga paate hai 

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})