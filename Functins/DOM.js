console.log(window);
console.log(window.document)
console.log(document.firstChild);
console.log(document.lastChild);
var x=document.children[0].children[1].children[0];
console.log(x);
console.log(x.TagName);
console.log(x.innerHTML);
x.innerText="Universe";
x.innerHTML="<b style='color:green'>World";
x.innerHTML="<h1 style='color:green'>World";



//inbuilt functions
document.getElementById("heading").innerHTML="LOREM";
let name=document.getElementById("heading");
console.log(name.innerHTML);
