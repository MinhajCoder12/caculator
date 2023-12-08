var crcr = document.querySelector(".crcr")
var main = document.querySelector(".main")
main.addEventListener('mousemove', (val)=>{
    crcr.style.left = val.x + "px"
    crcr.style.top = val.y + "px"
})