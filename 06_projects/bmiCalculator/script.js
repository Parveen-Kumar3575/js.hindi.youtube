let form = document.querySelector('form');

let height = parseInt(document.querySelector('#height').value)
let weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',(e)=>{
    let result = document.querySelector('#results');
    let bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span> Your bmi is ${bmi} </span>`;
})