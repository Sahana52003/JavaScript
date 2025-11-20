function a(func){
    console.log(func);
}
 
var b=function c(){//call-back function
    console.log("Hello")
};
a(b());


//Anonysfunction--(call-back function)
var a=function(){
    console.log("ghjk");
}
console.log(a());

function myVar(fun){
    console.log(fun);
}
myVar(function(){//call-back
    return 7;
})


