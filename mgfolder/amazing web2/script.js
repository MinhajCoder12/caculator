const scroll = new LocomotiveScroll({
    el: document.querySelector('.mg-main'),
    smooth: true
});

function abc(){
    window.addEventListener('mousemove', (val)=>{
        crcr = document.querySelector('.circle')
        crcr.style.left = val.x +'px'
        crcr.style.top = val.y +'px'
    })}
document.querySelectorAll('.pan').forEach((val)=>{
    val.addEventListener('mouseenter',()=>{
        opacity = 1
    })
    val.addEventListener('mousemove', (dets)=>{
        var dif = dets.clientY - val.getBoundingClientRect().top
        gsap.to(val.querySelector('img'), {
            opacity: 1,
            ease: Power1,
            top: dif,
            left: dets.clientX
        })
       
    })
    val.addEventListener('mouseleave', ()=>{
        gsap.to(val.querySelector('img'), {
            opacity: 0
        })
        
    })
})




abc()