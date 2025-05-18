// super ko hum bas constructor k andar hi call kr skte hai 
// super.methodName() ko kr skte hai hum call methods k andr b

class employee{
    constructor(username){
        this.username = username
    }
}

class employeeHead extends employee{
    constructor(username,password,email){
        // super parent k constructor ko call krta hai 
        super(username) // dekho ye syntactic sugar hai hume manually .call() nahi use krna pad raha aur this bhi nahi pass krna pad raha
        // ye internally hi ye kaam kr le raha hai 
        this.password = password
        this.email = email
    }

    printMe(){
        console.log(`username : ${this.username}`)
        console.log(`password : ${this.password}`)
        console.log(`email : ${this.email}`)
    }

}

let Detail = new employeeHead("Parveen",123,"parveen@gmail.com")
Detail.printMe()


// to check instance of - matlab kya usse bana hai 
console.log(Detail instanceof employeeHead)
console.log(Detail instanceof employee) // islie kyuki employeehead ne inherit kia hai employee ko



/*
🔹 static keyword in JavaScript (Classes)

📌 Definition:
static keyword ka use class ke aise methods aur properties ke liye hota hai jo class ke instance (object) se nahi, balki class khud 
se associated hote hain.


Example : 
class MathUtils {
  static add(x, y) {
    return x + y;
  }
}

console.log(MathUtils.add(5, 3));  // ✅ 8

const obj = new MathUtils();
// obj.add(5, 3);  ❌ Error: obj.add is not a function

*/