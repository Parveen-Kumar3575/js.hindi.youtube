// LEARNING : scope level and mini-hoisting

function outer(){
    const name = "Parveen"
    function inner(){
        console.log("name : ",name)
        const Lname = "Kumar"
    }
    // console.log("Lname : ",Lname)   // ReferenceError: Lname is not defined , because Lname is local variable 
    inner()
}
outer()


//+++++++++++++++++++++++INTERESTING +++++++++++++++++++++++++
//hoisting concept says we can access before declaration
//let,const ko before acces nahi kar skte wo error dega but var ko kar sakte hai but wo undefined value dega error nahi 


hello() // when we create function through defination and access it before creating function then it will not give error 
function hello(){      // isse basic function hi bolte hai 
    console.log("Hello")
}

//par agar hum function ko function expression(variable me function store krte hai) aur function banane se pehle acces krte hai to wo error deta hai 
// hello2()   it will give error : Cannot access 'hello2' before initialization
const hello2 = function(){      //this type of declaration is called function expression
    console.log("Hello 2")
}