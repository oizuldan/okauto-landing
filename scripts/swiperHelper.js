(function() {

    'use strict';
  
    const breakpoint = window.matchMedia( '(min-width:60em)' );
  
    let mySwiper;
  
    const breakpointChecker = function() {
  
      if ( breakpoint.matches === false ) {
        if ( mySwiper !== undefined ) 
            mySwiper.destroy( true, true );
            return;
        } else if ( breakpoint.matches === true ) {
          return enableSwiper();
        }
    };
  
    const enableSwiper = function() {
  
     mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop: false,
        mousewheel: true,
        slidesPerView: 1,
        speed: 1000
    });
  
    };
  
    breakpoint.addListener(breakpointChecker);
  
    breakpointChecker();
  })();