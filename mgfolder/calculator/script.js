var df = 0;
var string ="";
var num1;
var oprator;
var num2;
function runbutton(){
    document.querySelector('.cont-main')
    .addEventListener('click', (val)=>{
        var button = val.target.textContent
        if (df == 0){
            num1 = document.querySelector('.box1').textContent = button;
            df = 1
        }
        else if (df===1){
            oprator = document.querySelector('.box2').textContent = button;
            df = 2
        }
        else if (df==2){
            num2 = document.querySelector('.box3').textContent = button;
            df =3
        }
        else if(df == 3){ 
        if(oprator=="+"){
            var plus = Number(num1)+Number(num2)
            document.querySelector(".box3").textContent = plus;
            document.querySelector(".box1").textContent = "";
            document.querySelector(".box2").textContent = "";

        }
        else if(oprator=="-"){
            var plus = num1-num2
            document.querySelector(".box3").textContent = plus;
            document.querySelector(".box1").textContent = "";
            document.querySelector(".box2").textContent = "";
        }
        else if(oprator=="*"){
            var plus = num1*num2
            document.querySelector(".box3").textContent = plus;
            document.querySelector(".box1").textContent = "";
            document.querySelector(".box2").textContent = "";
        }
        else if(oprator=="/"){
            var plus = num1/num2
            document.querySelector(".box3").textContent = plus;
            document.querySelector(".box1").textContent = "";
            document.querySelector(".box2").textContent = "";
        }
    }
    })
}

runbutton()
