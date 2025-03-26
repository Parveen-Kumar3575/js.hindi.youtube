//Javascipt Execution Context - means hmari js file kis way me execute hogi 
//mainly do execution context hote hai - global execution context , function execution context



/*

Taking this function for execution phases example :
let var1 = 10
let var2 = 5
function add(num1,num2){
    let total = num1+num2
    return total
}
let result1 = add(var1,var2)
let result2 = add(20,30)


EXECUTION PHASES IN JAVASCRIPT : 

1) Global Execution Phase
    isme jo "this" hai wo global execution pr set krdia jata hai({} for node and window for browser)

2) Memory Phase/Creation Phase
    isme js saare variable aur function ko iktha krta hai aur variable me undefined daal deta hai 
    aur function me defination
    variables -> Undefined
    functions -> definations
    ex : 
        var1 -> undefined
        var2 -> undefined
        add -> function defination
        result1 -> undefined
        result2 -> undefined

3) Execution Phase
    isme variables ko unki values set kri jaati hai, aur jab function call krte hai toh uska "new execution phase" bnta hai jisme 
    memory phase aur execution phase aata hai
    ex :
        var1 -> 10
        var2 -> 5
        add -> new execution phase which is(new Environemwnt variable + Execution thread) mtlb phirse iska personal memory and execution phase hoga
        result1 -> 15
        result2 -> 50




*/


//Call stack humne inspect window k source me kia hai open video of hitesh vid25