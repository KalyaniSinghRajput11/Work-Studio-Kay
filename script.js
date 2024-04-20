function loading() {
var tl = gsap.timeline()
tl.to("#yellow1", {
    top: "-100%",
    delay: 0.9,
    duration: 0.5,
    ease: "expo.out"
})
tl.from("#loader video", {
    top: "100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
},)

tl.to("#loader h1", {
    color: "black",
    duration:0.2,
    delay: 0.6
}, "animation")
tl.to("#loader", {
    opacity: 0,
    display: "none"
})
}

loading();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });
    var page = document.querySelector("#page2")
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter", function(){
           var bgimg= ele.getAttribute("data-img")
           page2.style.backgroundImage =`url(${bgimg})`
        })
    })
    
    document.querySelector("#footer h2").addEventListener("click", ()=> {
        scroll.scrollTo(0)
    })
}
loco();
