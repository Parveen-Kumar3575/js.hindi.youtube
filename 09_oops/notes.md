

# Parts of OOP :-
    1) oop me object ka matlab hai collection of properties and methods
    2) Object literal = ek tareeka object banane ka ---- {} istemaal krke , matalb literally ek object banana
    3) Instances (new,this)
    4) constructor function
    5) Prototype
    6) classes

# 4 Pillars of oops 
    1) Abstraction (hiding internal details and showing only necessary data)
    2) Inheritance
    3) Encapsulation
    4) Polymorphism (ek function kaafi tareeke se behave kr skta hai means poyl-many,morphism -behaviour)

# kya js oop hai ?
    Js support krti hai oop ko but ye oop language nahi hai , pehle js me oop concepts bhi support nahi kiye jaate the 
    after es6(js 2015) oop ko as a syntactic sugar add kia gaya 

    reasons js cannot be called oop -
        1) muli-paradigm support  -  procedural aur functional programming bhi kr skte hai 
        2) pure oops to bilkul ni hai kyuki isme datatypes vgerah object form me nahi hai 
        3) object ko bina classes k create kia ja skta hai 
        4) object create krne k lie prototype programming use krna hota hai 



# why oop ?
    kaafi spagheeti code hora tha mtlb complex aur long jisme se koi bhi chunk reusable nahi hota tha islie



----    CONCEPTS    ---------

1) constructor function(which is " new ") -
    ye basically hume allow krta hai ki hum ek hi object literal se multiple instances bna paaye 

    let user = user("sdf",12,true)
    let usertwo = user("sss",13,false)
    ab usertwo ki values hi hume dikhegi na ki user ki kyuki wo overwrite hogya , but new lga dia to dono independnt ho jayenge

2) Important point about "new"
    a) jaise hi new ka use krte hai toh ek empty object create ho jata hai , aur iss object ko instance bolte hai
    b) new keyword k kaaran constructor function call hota hai 



Prototypes in js------  (javascript haar nahi maanti hai )

yaad krne ka tarika - hidden property, upar wala object, js behavior, js k andar sab obj hai

1) javascript me har object k pass ek hidden property hoti hai jisse prototype kehte hai - [[Prototype]] (jo ki hum __proto__ ya .      prototype ke through dekh sakte hain).

2) protoype javascript ka upar wala object hai , jaha se objects jo humne bnae hai wo properties ya methods inherit krte hai 

3) javascript ka behaviour hai ki wo ek property ya method ko jab tak dhundta hai jab tak usse mil nahi jata, iske liye wo prototype chaining follow krta hai matlab upar se upar wale object prototype me jata rehta hai , jab tak mil na jaaye ya fir wo null tackle na kar le islie js k behaviour ko prototypal behaviour b kehte hai
**Aur object k aage kuch b ni hai ye end of js hai 

4) js k andar sab kuch ek object hai - function,array,string , iske baad null ata hai 
    array -> object ->null
    string -> object ->null
    func -> object -> null

function k sath bhi hum property ka instemaal kr skte hai 
uskanaam.propertyName = value ;