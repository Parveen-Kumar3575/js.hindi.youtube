

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