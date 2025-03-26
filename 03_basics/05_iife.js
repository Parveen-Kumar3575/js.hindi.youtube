//Imediately Invoked Function Expression
//two types - named and anonymous
/*
Main reason for iife concept:
 1) ye immediately invoke hota hai jaise hum chahte hai ki jaise hi program chale database connection establish ho jaaye
 2) ya fir global pollution se bachata hai  means variable accessible nahi honge jaise agr x variable normal function me h pr hum parameter k 
 through access kr skte hai but isme aesa ni hota
 
Invalid reason : jaldi se call krdeta hai  


()();
isme first bracket me function body aati hai
second bracket first bracket k bilkul sath aur ye execution bracket hai
; lagana compulsory hai coz function ko pta ni lgta ki execution khtm kab hona hai 

*/

// Named iife
(function db(){
    console.log("Db1 connected ");
})();

//anonymous iife
(()=>{
    console.log("Db2 connected ");
})();

( (name) =>{
    console.log(`Name : ${name}`);
}) ("Pabbi");


