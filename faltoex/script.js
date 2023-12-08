var title;
var titlesec;
var i = 0;
input_title = ()=>{
    document.querySelector(".task-button")
    .addEventListener('click' ,(e)=>{
        if(i==0){
            title = document.querySelector(".text").value
            titlesec += document.querySelector(".task-cont").textContent += title;
            console.log(titlesec)
            i=1
        }
        else if(i==1){
            alert("Complete remaining task")
        }
    })
    
}

var button1;
var button2;
var ab
var bc


var buttons = document.querySelectorAll("button")
console.log(buttons)
var done = buttons[1]
var skip = buttons[2]
done.addEventListener("click", (val)=>{
    document.querySelector("result-mini-cont").innerHTML = ""
})
skip.addEventListener("click", (val)=>{
    document.querySelector("result-mini-cont").innerHTML = ""
    console.log(val)
})

input_title()