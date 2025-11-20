//Anonymous function
function Number(value){
    console.log(value);
}

Number(function(){
    return 77;
})



//Anonymous function
function operate(num){
    console.log(num());
}

operate(function(){
    return 67;
})