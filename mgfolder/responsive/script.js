let timer = 0

function time(){
    setInterval(() => {
        if(timer<100){
            timer += Math.floor(Math.random()*40)
            document.querySelector(".rapper").innerHTML = timer+"%"
        }
        else if(timer>100){
            timer = 100
            document.querySelector(".rapper").innerHTML = 100+"%"
        }
    }, 1000);
}
time()

gsap.to(".main .rapper",{
    delay: 5,
    y: "-100vh"
})
let tl = gsap.timeline()

tl.from(".nav .logo",{
    y: 20,
    opacity: 0,
})
tl.from(".nav .nav-options h4",{
    y: 20,
    opacity: 0,
})
tl.from(".nav .nav-options button",{
    scale: 0,
})
tl.from(".left h1",{
    y: 20,
    opacity: 0,
}) 
tl.from(".left p",{
    y: 20,
    opacity: 0,
}) 
tl.from(".left button",{
   scale: 0,
})
tl.from(".contant .rieght",{
    scale: 0
})