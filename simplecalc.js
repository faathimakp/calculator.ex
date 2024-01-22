writeExp=(e)=>{
    display.value+=e.target.id
}

getResult=()=>{
    if(display.value==""){
    alert("enter a expression!")
}
else{
    try{
    display.value=eval(display.value)
    }
    catch{
        alert("enter a valid expression!!")
        display.value=""
    }
}
}
 allClear=()=>{
    display.value=""
 }
 Delete=()=>{
    display.value=display.value.slice(0,-1)
 }