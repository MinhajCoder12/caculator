
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    duration: 1,
  });
sb = ()=>{
    var sb = document.querySelector(".left-box1").addEventListener("mouseenter", (e)=>{
        gsap.to(".left-box1", {
            y: 10,
            duration: 0.5,
        })
    })
    var sb = document.querySelector(".left-box1").addEventListener("mouseleave", (e)=>{
        gsap.to(".left-box1", {
            y: 0,
            duration: 0.5,
        })
    })
}

bs = ()=>{
    var bs = document.querySelector(".left-box2").addEventListener("mouseenter", (e)=>{
        gsap.to(".left-box2", {
            y: 10,
            duration: 0.5,
        })
    })
    var bs = document.querySelector(".left-box2").addEventListener("mouseleave", (e)=>{
        gsap.to(".left-box2", {
            y: 0,
            duration: 0.5,
        })
    })
}

button = ()=>{
    var button = document.querySelector(".lo").addEventListener("mouseenter", ()=>{
        gsap.to(".lo",{
            backgroundColor: "#B3E5FC",
        })
    })
    var button = document.querySelector(".lo").addEventListener("mouseleave", ()=>{
        gsap.to(".lo",{
            backgroundColor: "#89C5F4",
        })
    })
}

Shery.makeMagnet(".lo", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet(".nav button", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

button()
sb()
bs()
