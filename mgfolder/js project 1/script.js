var rect = document.querySelector('.rect')
rect.addEventListener("mousemove", function(val){
    var rectbound = rect.getBoundingClientRect();
    var insiderect = val.clientX - rectbound.left
    if(insiderect<rectbound.width/2){
        var red = gsap.utils.mapRange(0,rectbound.width/2,255,0,insiderect);
        gsap.to(rect, {
            backgroundColor: 'red',
            ease: Power4,
        })
    }
    else{
        gsap.to(rect, {
            backgroundColor: 'blue',
        })
    }
})
rect.style.backgroundColor = '#fff';