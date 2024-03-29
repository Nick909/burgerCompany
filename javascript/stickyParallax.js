
$(document).on('scroll',  () => changesInDimensions());

$(window).on('resize', () => {
  let topHigh = undefined;
  if(window.innerHeight < 600 ) {
   topHigh = 10;
  }else {
   topHigh = 50;
  }

  changesInDimensions(topHigh);
})

$(window).on('orientationchange', () => {
  let topHigh = undefined;
  if(window.orientation === 90 || window.orientation === -90) {
   topHigh = 10;
  }else {
   topHigh = 50;
  }

  changesInDimensions(topHigh);
});


function changesInDimensions(n) {
  parallax('#home', n);
  parallax('#menu', n);
  parallax('#social', n);
}


function parallax(sectionCurrent, topHigh, topPorcent) {
  const bodyScrollTop = $(document).scrollTop();

  const screenBodyViewHight = $(window).height();
  const screenBodyViewWidht = $(window).width();
  
  const sectionTop = $(sectionCurrent).offset().top;
  const sectionSpan = $(`${sectionCurrent} span`);
  
  if (window.innerWidth >= 768) {
    topHigh = 37;
  }
  else if(topHigh === undefined || topHigh === null) {
    ((screenBodyViewWidht < screenBodyViewHight))? topHigh = 50 : topHigh = 10;
  }


  
  sectionSpan.css('top', `calc((${bodyScrollTop/10}rem + ${0}% + ${topHigh}rem) - (${sectionTop/10}rem)`);
  // sectionSpan.animate({top: (bodyScrollTop/10 + 0% + topHigh) - (sectionTop / 10)}, 0);
}
