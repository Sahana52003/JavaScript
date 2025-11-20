//arrow function
let p=()=>{
console.log("Gm")

}
console.log(p);
p();



var funcname=(p,q)=>{
console.log("Hi,Hello");
console.log(p,q);
return "yui";
}
console.log(funcname)
console.log(funcname())
console.log(funcname("HYD","IND"));







//Higher order function
function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);


//currying function

function mul(x){
    return function(y){
        return x*y;
    }
}
var m=mul(4);
console.log(m(6));









function memoize(func) {
    var cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}

var fast = memoize(slow);
console.log(fast(5)); // Computing... 10
console.log(fast(5)); // 10 (cached)



const a = [1, 2, 3, 4, 5];
const res = a.slice(1, 4);
console.log(res); 
console.log(a)
