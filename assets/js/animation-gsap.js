/*
TweenMax.to($bg, 1, {
    backgroundSize: "+=100% +=125%", 
    ease:Power1.easein
});

// cache element in variable
var $bg = $('.bg-principal');
// set initial CSS opacity to 0
// GSAP handles the cross browser vendor prefixes
TweenMax.set($bg,{autoAlpha:0});
// animate CSS opacity to 1
TweenMax.to($bg,3, {autoAlpha:1});
*/

// Play Video Animation
TweenMax.to('.btn__play-video', 1.5, {opacity:1, ease: Circ.easeOut})
TweenMax.to('.play-video__text', 1, {opacity:1, height: "25px", delay:0.5, ease: Expo})

// Movie Info Animation
TweenMax.to('.btn__buy-now',{delay:1, opacity:1, transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Circ.easeOut })
TweenMax.to('.name-movie', {height: "58px",delay:1, opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo})
TweenMax.to('.description', {height: "24px",delay:1, opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo})
TweenMax.to('.img-cover-film', {delay:1, opacity: 1.5, transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo})


$(window).on("resize", resize);

resize();

function resize() {
  var tl = new TimelineMax();
  if (window.matchMedia("(min-width: 426px)").matches) {
    
    // The view port is at least 426 pixels wide
    TweenMax.to('.lbl-input', {width: "110px",margin: "0 0 1rem 0 0",delay:2, opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo})
    tl.to('.btn__send', 0.5, {alpha: 0})
        .to('.btn__send', 0.5, {alpha: 1, delay: 0.8, left:"260px", ease: Expo });
    TweenMax.to('.secondary-search-input', {width: "300px",delay:1.8, opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)", ease: Expo})
  
  } else {
    
    // The view port is less than 426 pixels wide
    tl.kill()
  }
}




