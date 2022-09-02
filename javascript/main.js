
function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

$(document).on('scroll',  () => changeNav());

function changeNav () {
  const tam = 44;
  const num = $(document).scrollTop();
  const nav = $('#navigation')
  const logo = $('#navigation .logo');
  const cart = $('#navigation .btn-group__cart');

  if (num > tam) {
    nav.addClass('navigation--tam');
    logo.addClass('logo--dis');
    cart.addClass('btn-group__cart--tam');
  } else if ( num <= tam) {
    nav.removeClass('navigation--tam');
    logo.removeClass('logo--dis');
    cart.removeClass('btn-group__cart--tam');
  }
}