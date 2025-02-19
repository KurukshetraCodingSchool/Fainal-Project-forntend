var tl = gsap.timeline();


tl.from(".hero",{
    scale:2,
    duration:1,
    delay:1
})


.from(".hero .top h1",{
    opacity:0,
    duration:1,
    y:-200
})
.from(".hero .bottom h1",{
    opacity:0,
    duration:1,
    y:-200
})

.from(".Page2 h1",{
    y:-200,
    opacity:0,
    duration:1
})
.from(".Page2 #img1 , #img2",{
    y:-200,
    opacity:0,
    duration:1
})