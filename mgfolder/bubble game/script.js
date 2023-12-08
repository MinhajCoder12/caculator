var clutter ="";
var ran = 0;
var time = 60;
console.log('hello')
var score_val = 0;
var hitrn = 0;
function bubblegen(val){
   
    for (let i = 0; i<102; i++){
        ran = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${ran}</div>`;
    }
    
}
function Hit(){
hitrn = Math.floor(Math.random()*5)
var score = document.querySelector(".box2").textContent = hitrn;
}
function timer(){
let timerint = setInterval(()=>{ 
if (time>0){
    time--;
    document.querySelector('.box3').textContent = time;
}
else{
    clearInterval(timerint);
    document.querySelector('.cont-main').innerHTML = "<h1>Game is Over!";
}
},1000)
}
function Score(){
    score_val += 10;
    document.querySelector('.box1').textContent = score_val;
}
document.querySelector('.cont-main')
.addEventListener('click', function(val){
    var scoreinfo = val.target.textContent
    if (scoreinfo == hitrn){
        Score()
        Hit()
        bubblegen()
    }
})
bubblegen()
Hit()
timer()

document.querySelector('.cont-main').innerHTML = clutter;
