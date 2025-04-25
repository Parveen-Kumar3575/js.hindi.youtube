let form = document.querySelector('form');

/*
humne below statement ko yaha nahi likha aese islie kyuki jab page lode hota hai tabhi ye values utha leti hai 
 magar humne to values enter hi nahi ki hoti hai to islie by default ye Nan value deta hai 
 islie hum ise form k andar de rahe hai taki jab wo submit ho tabhi wo show kre kyuki tab tak hum value de denge 
 let height = parseInt(document.querySelector('#height').value)
 let weight = parseInt(document.querySelector('#weight').value)

*/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    /* prevent default lgana important hai, jab form submit hota hai tab page reload hota hai data ko backend me bhejne k lie
       islie isse hatane se data gayab ho jayega kyuki page refresh hota hai , iss default behaviour ko rokne k lie prevent default use 
       krte hai 
    */

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results');

    if(height === 0 || height == ' ' || isNaN(height)){
        result.innerHTML = `<span> Please enter your correct height - ${height} is not valid` 
    }else if(weight === 0 || weight == ' ' || isNaN(weight)){
        result.innerHTML = `<span> Please enter your correct height - ${weight} is not valid` 
    }else{
        
        let bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = `<span> Your bmi is ${bmi}  <br> It is Under Weight</span>`;

        }else if(bmi > 18.6 && bmi <= 24.9){
            result.innerHTML = `<span> Your bmi is ${bmi}  <br> It is Normal Range </span>`;
        }else{
            result.innerHTML = `<span> Your bmi is ${bmi}  <br> It is Over weight</span>`;
        }
        

    }


    
})

