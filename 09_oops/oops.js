function user(username,loginCount,loginStatus){
    //left side wala current context hai aur right side wala data jo para se aa ra hai
    this.username = username
    this.loginCount = loginCount
    this.loginStatus = loginStatus

    this.greeting = function(){
        console.log(`hello ${this.username}`)
    }
    return this     //  -> ye optional hai jab hum new use krte hai to ye function automatically this return krta hai 
}

/*

Ab ye naye instance to create ni kr ra to ye dono ek dusre ko overwrite kr re hai isilie new keyword important hai taaki naya 
indepenedent instance bane aur ek dusre ko overwrite na kare
 let userOne = user("Parveen",12,true)
 let userTwo = user("Kumar",14,false) 

 */

 //ye correct way hai 
 let userOne = new user("Parveen",12,true)
 let userTwo = new user("Kumar",11,false)
console.log(userOne)
console.log(userTwo) 