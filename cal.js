
// buttons.forEach((button) => {
//     button.addEventListener("click",(e)=>calculate(e.value))
// });
// function but() {
//     var e=b1.innerText
//     console.log(e);
//     i1.value=e
// }
let result=document.getElementById("i1")
let calculate=(number)=>{
    result.value+=number
}
let Result=()=>{
    try {
        result.value=eval(result.value)
    } catch (error) {
        result.value="Enter a valid expression"
    }
}

function clr() {
    result.value=" "
}
function del() {
    console.log(typeof(result.value));
    result.value=result.value.slice(0,-1)
}
var dar=document.getElementById("dar");
var moon=document.getElementById("moon");
function modeChange() {
    // let calculator=document.getElementByClassName("calculator");
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        moon.src="sun-icon-31.png" 
    }
    else{
        moon.src="moon.png" 
    }
}