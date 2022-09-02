
function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

$(document).on('scroll',  () => changeNav());

function changeNav () {
  const tam = 60;
  const num = $(document).scrollTop();
  const nav = $('#navigation')
  const logo = $('#navigation .logo');
  const cart = $('#navigation .btn-group__cart');
  const link = $('nav#navigation .menu ul li a');
  const navBefore = $('nav#navigation');
  
  console.log(navBefore, 'before');

  const sectionTop = $('#menu').offset().top;

  if (num > tam) {
    nav.addClass('navigation--tam');
    logo.addClass('logo--dis');
    cart.addClass('btn-group__cart--tam');
  } else if ( num <= tam) {
    nav.removeClass('navigation--tam');
    logo.removeClass('logo--dis');
    cart.removeClass('btn-group__cart--tam');
  }


  if (num >= sectionTop) {
    link.addClass('link--color');
    navBefore.addClass('scroll');
  } else {
    link.removeClass('link--color');
    navBefore.removeClass('scroll');
  }
}