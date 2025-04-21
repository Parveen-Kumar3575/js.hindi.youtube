let buttons = document.querySelectorAll('.button')

// console.log(buttons.target) XX
buttons[0].addEventListener('click',function(e){
    document.body.style.backgroundColor = e.target.id
})

buttons.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        document.body.style.backgroundColor = e.target.id;
    })
})