
function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}


$(document).on('scroll', function () {
  onScroll();
});

function onScroll() {
  parallax('#home');
  parallax('#test');
}

function parallax(sectionCurrent, topHigh, topPorcent) {
  const bodyScrollTop = $(document).scrollTop();
  const screenBodyVieweHight = $(window).height();
  const screenBodyVieweWidht = $(window).width();
  
  const section = $(sectionCurrent);
  const sectionTop = section.offset().top;
  const sectionSpan = $(`${sectionCurrent} span`);

  if(topHigh === undefined || topHigh === null) {
    ((screenBodyVieweWidht < screenBodyVieweHight) && screenBodyVieweHight > 600)? topHigh = 50 : topHigh = 10;
  }  

  sectionSpan.css('top', `calc((${bodyScrollTop/10}rem + ${0}% + ${topHigh}rem) - (${sectionTop/10}rem)`);
}

