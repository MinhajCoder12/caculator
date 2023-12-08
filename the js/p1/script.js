var buttons = document.querySelectorAll("button")
buttons.forEach((e)=>{
    e.addEventListener("click", (val)=>{
        if(val.target.textContent=="Javascript"){
            document.querySelector("h2").textContent = "YOU GIVE THE RIGHT ANSWER!!"
            document.querySelector(".button-cont").innerHTML = "";
        }
        else{
            document.querySelector("h2").textContent = "YOU GIVE THE WRONG ANSWER!"
            document.querySelector(".button-cont").innerHTML = "";
            
        }
    })
})