/*
    It is importan to understand lexical scope before closures
🔥 Lexical Scoping — 

Ek variable ka scope (yaani kahaan use access kiya ja sakta hai) us jagah pe depend karta hai jahan wo code mein likha gaya hai.

# Agar koi function ke andar variable banaya hai, to:
1) Us function k andar aur us function k function me accessible hoga mtalab outer function ka var outer func me aur uske inner func
    me accesible hoga outer function k bahar accessible nahi hoga.
2) Us function ke andar ke functions us variable ko use kar sakte hain , bahaar wale nahi 

*/



/*
------- CLOSURES -------
closures ek function hota hai jo ki apne surrounding k variable ko yaad rkhta hai , chahe wo function bahaar call ho , basically ye innner
outer function me yaad rehta hai .

Matlab:

# Jab tum ek function ke andar doosra function banao,
# Aur wo inner function apne outer function ke variables ko access karta hai,
# Aur agar inner function ko baad mein kisi aur jagah se call kiya jaye, toh bhi wo variables yaad rehte hain.

Isko hi Closure kehte hain.

***  IMP    ***
jab hum inner function return krte hai to wo sirf inner function hi nahi return krta balki pura lexical scope return krta hai , yaha 
pr execution context nahi basically memory use hoti hai 

*/

function outer(){
    let Fname = "Parveen"
    function inner(){
        console.log("Fname is ",Fname)

    }
    return inner    // ye pura lexical scope hi return krega, aur variables hai jo external unko yaad rkhega , js engine outer func
                    // k variables ko yaad rkhega by storing that variables and scopes in js engine memory 

}
// aur js engine tabhi store krega agr inner function return ho kr use hora hai , nahi use hota toh wo destroy krdega pura execution context
let innerFunc = outer()
innerFunc()
