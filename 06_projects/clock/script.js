



setInterval(()=>{
    let date = new Date();   
    // new date() ko andar kyu rkh ?
    
    // new date ko andar islie rkha kyuki wo har interval pr change hote rehna chahiye 
    // aur localtimestring function bhi date pr hi depend krta h jisme time ki detail bhi aati hai

    document.querySelector('#clock').innerHTML =   date.toLocaleTimeString(); 
},1000)