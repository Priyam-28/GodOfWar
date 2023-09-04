gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "85px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub:3 ,
    },
  });
  gsap.from(".box1 img,.about", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".box1",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });