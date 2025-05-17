/*

.call() ek method hai jo JavaScript ke function objects mein hota hai.

    Syntax  :  functionName.call(thisArg, arg1, arg2, ...);

    # functionName = jise aap call karna chahte hain
    # thisArg = kis object ke context mein us function ko execute karna hai
    # arg1, arg2,... = function ke arguments



ye jo this hote hai functions k andar ye sirf current context ko hi point krte hai yaani jo object create hua hai in function ka istemaal
krke sirf unhi ko , 
but hum yaha function k andar function call kr re hai, islie jo internal function hai wo this agar - 
non-strict mode me hai - to wo window ko point kregi
strict mode me hai - undefined ko point kregi 

islie jab hum usse dusre function me call krte hai to "this" bhi starting me pass krte hai taaki wo us function jiske andar humne 
internal func ko call kia hai wo external function k context ko point kre

*/


function userNameDetail(username){

        this.username = username
}

function user(username,email,password){
    userNameDetail.call(this,username)
    this.email = email
    this.password = password
}

let showDetail = new user("Parveen","parveen@gmail.com",123)

console.log(showDetail)