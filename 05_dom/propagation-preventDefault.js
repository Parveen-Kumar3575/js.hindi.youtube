/* 

preventDefault ---
    prevent default method default action ko hone se rokta hai , jaise agar hum link bnate hai uspr click krte hai to hum by default
    dusre page pr navigate kr jate hai , but jab hum prevent default pr click krenge tab wo dusre page pr shift nahi krega, hume use 
    manually handle krna hoga. 
    Aur bhi kayi default actions hai jaise - 
    1) submitting the form
    2) tick after clicking checkbox


stopPropagation ---

    stopPropagtion apne parents tak apna event prevent hone se bachata hai --- refer mdn for example

    Example :- 
    jaise ek outer box hai aur ek inner to inner box pr jab hum click krenge to outer bhi ho jayega but hum stopPropagation ka 
    istemaal krke ise avoid kar skte hai 


    Syntax :-
    e.stopPropagation()
 

    
stopImmediatePropagation ---
    ye bhi apne parents tak propagate hone se bachata hai but, jaise humne inner wale pr do event lga die ,
    toh stopPropagation inner wale k dono event ko chalayega but stopImmediatePropagation ek hi event ko chalayega, chahe do event lge 
    ho , matlab wo immediately stop kr dega propagation 


*/