var cur = document.querySelector("#cursor")
var curs = document.querySelector("#cursor_blur")
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+10 +"px"
    cur.style.top = dets.y+"px"
    curs.style.left = dets.x-150+"px"
    curs.style.top = dets.y-150+"px"
})
var h4all=document.querySelectorAll("#nav h4")

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale=2;
        cur.style.border="1px solid #fff";
        cur.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale=1;
        cur.style.border="0px solid #95C11E";
        cur.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }

}) 
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about_us img,#about_us_in",{
    y:90,
    opacity:0,
    duration:2,
    // stagger:0.1,
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1,
        
//     }
// })
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
        
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
        
    }
})
gsap.from("#page5 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})



