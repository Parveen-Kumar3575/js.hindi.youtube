/*
✅ Getter (get):
Ek special method jo object ki property read karte waqt automatic call hota hai, bina parentheses ke.

✅ Setter (set):
Ek special method jo object ki property set (assign) karte waqt automatic call hota hai, bina parentheses ke.

🎯 Purpose:
Ye dono allow karte hain ki tum property access ko function ki tarah control kar sako, bina function jaisa dikhaye.



aur inki andar ki jo fields hoti hai wo private hoti hai koi bhi inke andar ki fields ko access nahi kr skta 
aur ye manually call nahi hote inhe call krna padta hai 


****************
Use Case :-
ye basically tab use hota hai jab hum password le aur use encrypt krke dikhaaye 
** dekho jaise array length calculate krke de deta hai hume to basically uss property k piche getter aur setter hi hote hai jo uski 
length ko calculate kr rahe hote hai 

*/

class user{
    constructor(password,email){

        // dekho ye hum value set kr re hai aur jab hum constructor k andar value assign kr rahe hote hai tab hume setter likhne ki
        // jarurat hoti hai, agar hum nahi likhte to error dega 
        // ya to constructor k andar assignemt na karo ya fir kar rahe ho to setter bhi likho  
        this.password = password // ----->>  ye line setter ko call krti hai jisme password(RHS value) setter k value para me chl jati hai
        this.email = email
    }

    
    // getter setter k aage ka name this.AnyName se match krni chaiye , constructor me hai jo
    set password(value){
        this._password = value
        // yaha _password islie likha kyuki password likhne pr setter aur constructor ki race lg jaati kyuki dono hi assignemnt k waqt
        // automatic call hote hai, islie naam change kia wrna call stack bhar jata hai 
    }

    // get ek keyword hai aur password ek property
    get password(){
        return this._password.toUpperCase()
        // ab ye _password islie likh rahe hai kyuki settter me set bhi wahi kia hai 
    }

}

let obj = new user("Parveen","par@gmail.com")
console.log(obj.password)



console.log("----------FUNCTION BASED GETTER AND SETTER ----------")


function funcUser(name,password){
  

    Object.defineProperty(this,"name",{     // this yaha pr uss object ko refer krega jo isse call krega
        get : function(){
            return this._name.toUpperCase()
        },
        set : function(value){
            this._name = value
        }
    })

    Object.defineProperty(this,"password",{
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
    // ye modern hai hume function k samay isse nich define krna hota hai otherwise undefined set krdega setter
    this.name = name
    this.password = password
}

let funcUser1 = new funcUser("HrithikFunc","KanganaFunc")
console.log(funcUser1.name)
console.log(funcUser1.password)




// Chhod do niche wala XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// console.log("------ GETTER SETTER WITH OBJECT   ------------")

// let externObj = {
//     _email : "zero@gamil.com",
//     _pass : "pass123",

//     get _email(){
//         return this.email.toUpperCase()
//     },
//     set _email(value){
//         this.email = value
//     }
// }

// let crr = Object.create(externObj)
// console.log(crr._email)