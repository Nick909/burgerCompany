
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

function parallax(sectionCurrent) {
  const bodyScrollTop = $(document).scrollTop();
  const section = $(sectionCurrent);
  const sectionTop = section.offset().top;
  const sectionSpan = $(`${sectionCurrent} span`);
  // const sectionSpanTop = sectionSpan.position();
  
  sectionSpan.css('top', `calc((${bodyScrollTop/10}rem + ${50}%) - (${sectionTop/10}rem) + ${12.2}%)`);
  if(sectionCurrent === '#home'){
  } else {
    // sectionSpan.css('top', `calc((${bodyScrollTop}px + ${50}%)) - ${sectionTop}px`);
  }
}

