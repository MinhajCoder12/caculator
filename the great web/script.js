function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

init()

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

var hover = document.querySelector(".big-font>h4")



var crcr = document.querySelector(".cursor")
var crcr_b = document.querySelector(".cursor-blur")



document.addEventListener("mousemove",(val)=>{
    crcr.style.left = val.x-10 +"px"
    crcr.style.top = val.y-10 +"px"
})

document.addEventListener("mousemove",(val)=>{
    crcr_b.style.left = val.x - 100 +"px"
    crcr_b.style.top = val.y - 100 +"px"
})

gsap.to(".nav", {
    backgroundColor: "#000",
    height: "90px",
    scrollTrigger:{
        trigger: ".nav",
        scroller: "body",
        scrub: 1,
        start: "top -10%",
        end: "end -20%"
    }
})
gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        scrub: 2,
        start: "top -30%",
        end: "end -90%"
    }
})