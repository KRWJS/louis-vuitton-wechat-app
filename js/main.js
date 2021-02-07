$(function() {

    // init controller
    var controller = new ScrollMagic.Controller({vertical: false});

    var s1 = $('#s1'),
        logo = $('#js-logo'),
        introLink = $('#js-intro-link'),
        s2Image = $('#js-s2-image'),
        s4Content = $('#js-s4-content'),
        s5Image = $('#js-s5-image'),
        s6Content = $('#js-s6-content'),
        s7Image = $('#js-s7-image'),
        s8Content = $('#js-s8-content'),
        s9ContentUpper = $('#js-s9-content--upper'),
        s9ContentLower = $('#js-s9-content--lower'),
        s11Content = $('#js-s11-content'),
        s12Content = $('#js-s12-content'),
        s13Content = $('#js-s13-content'),
        width = 1920,
        speed = 50,
        duration = width / speed,
        endPosition = width + (speed / 50),
        s13Image = $('#js-s13-image');


        // tl
        //   .fromTo(s1, 1, {y:-500, ease: Power4.easeIn, autoAlpha: 0}, {y:0, autoAlpha:1})
        //   .fromTo(s2Image, 1, {x:400, ease: Power1.easeOut, autoAlpha: 0}, {x:0, autoAlpha: 1})
        //   .fromTo(s4Content, 1, {x:300, ease: Power4.easeIn, autoAlpha: 0}, {x:0, autoAlpha: 1})
        //   .fromTo(s5Image, 0.5, {x: 300, ease: Power1.easeIn, autoAlpha: 0}, {x:0, autoAlpha: 1})
        //   .fromTo(s6Content, 1, {x: 100, ease: Power1.easeIn, autoAlpha: 0}, {x: -145, autoAlpha: 1})
        //   .fromTo(s8Content, 1, {x: 100, ease: Power1.easeIn, autoAlpha: 0}, {x: -145, autoAlpha: 1})
        //   .fromTo(s9ContentUpper, 5, {x: 100, ease: Power4.easeIn, autoAlpha: 0, delay: 10}, {x: -50, autoAlpha: 1})
        //   .fromTo(s9ContentLower, 5, {x: 100, ease: Power4.easeIn, autoAlpha: 0, delay: 10}, {x: 0, autoAlpha: 1});


    //Fade in logo and link
    var tween = TweenMax.fromTo(s1, 1, {
                y: -500,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s1',
    })

    .setTween(tween)
    .addTo(controller);


    //Fade in section 2 image
    var tween = TweenMax.from(s2Image, 1, {
                x: 400,
                ease: Power1.easeOut,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s2',
        triggerHook: 1
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 4 text horizontally
    var tween = TweenMax.fromTo(s4Content, 1, {
                x: 200,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                x: -100,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s4',
        triggerHook: 1
    })

    .setTween(tween)
    .addTo(controller);


    //Fade in section 5 image
    var tween = TweenMax.from(s5Image, 1, {
                x: 300,
                ease: Power1.easeIn,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s5',
        triggerHook: 1
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 6 text horizontally
    var tween = TweenMax.fromTo(s6Content, 1, {
                x: 100,
                ease: Power1.easeIn,
                opacity: 0
              },
              {
                x: -145,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s6',
        triggerHook: 1
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 8 text horizontally
    var tween = TweenMax.fromTo(s8Content, 1, {
                x: 100,
                ease: Power1.easeIn,
                opacity: 0
              },
              {
                x: -145,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s8',
        triggerHook: 1
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 9 text horizontally/staggered
    var tween = TweenMax.fromTo(s9ContentUpper, 4, {
                x: 200,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                x: -50,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s9',
        triggerHook: 0
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 9 text horizontally/staggered
    var tween = TweenMax.fromTo(s9ContentLower, 3, {
                x: 200,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s9',
        triggerHook: 0
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 11 text horizontally
    var tween = TweenMax.fromTo(s11Content, 3, {
                x: 200,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s11',
        triggerHook: 0
    })

    .setTween(tween)
    .addTo(controller);


    //Bring in section 12 text horizontally
    var tween = TweenMax.fromTo(s12Content, 1, {
                x: 200,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s12',
        triggerHook: 1
    })

    .setTween(tween)
    .addTo(controller);


    //Fade in logo and link
    var tween = TweenMax.fromTo(s13Content, 1, {
                y: -500,
                ease: Power4.easeIn,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s13',
    })

    .setTween(tween)
    .addTo(controller);


    //Constant scrolling body on repeat
    var tween = TweenMax.to("body", duration, {
                css:{
                  backgroundPosition: "-2000px 0px"
                },
                repeat: -1,
                ease: Linear.easeNone
              });

    var scene = new ScrollMagic.Scene({
        triggerElement: '#s1',
    })

    .setTween(tween)
    .addTo(controller);


});
