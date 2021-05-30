let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to('.text', 2, {x: 500})
// .to('.content-images', 2, {opacity: 0}, '-=2 ')

// timeline.fromTo('.text', {opacity: 0}, {opacity: 1 , duration: 2})

timeline
.to('.rock', 3, {y: -300})
.to('.girl', 3, {y: -200}, '-=3')
.fromTo('.bg', {y: -50}, {y: 0, duratio: 3}, '-=3')
.to('.content-container', 3, {top: '0%'}, '-=3')
.fromTo('.content-images', {opacity: 0}, {opacity: 1, duration: 5})


let scene = new ScrollMagic.Scene({
    triggerElement: 'section', 
    duration: '100%', 
    triggerHook: 0,
})
.setTween(timeline)
.setPin('section')
.addTo(controller)