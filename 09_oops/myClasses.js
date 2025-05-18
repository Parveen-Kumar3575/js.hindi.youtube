class User{

    // EK CLASS ME EK HI CONSTRUCTOR HO SKTA HAI AUR CONSTRUCTOR EK KEYWORD HAI
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
    }

    // Declaring methods 
    UpperName(){
        return this.username.toUpperCase()
    }

    ecryptPass(){
        return `${this.password}abc`
    }
}

let obj = new User("Parveen",123,"parveen@gmail.com");

console.log(obj.UpperName())
console.log(obj.ecryptPass())

/* 
    BEHIND THE SCENES -----

    function User(username,password,email){
    this.username = username
    this.password = password
    this.email = email
}

User.prototype.UpperName = function(){
    return this.username.toUpperCase()
}

User.prototype.encryptPass = function(){
    return `${this.password}abc`
}

let obj = new User("Parveen",123,"par@gmailc.com")
console.log(obj.UpperName())
console.log(obj.encryptPass())


*/
