
function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

$(window).on('resize', () => {
  if(window.innerWidth > 1024) closeMenu();
})


$(document).on('scroll',  () => {
  changeNav()
  activateMenuAtCurrentSection('home');
  activateMenuAtCurrentSection('menu');
});

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


function activateMenuAtCurrentSection(sec) {
  const section = document.querySelector(`#${sec}`);
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a sesanção passou da linha
  //quais dados vou precisar?
  
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine =  targetLine >= sectionTop;


  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine; 

  const sectionBundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
  
  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`#navigation .menu a[href*=${sectionId}]`);
  console.log(menuElement, 'tes');

  menuElement.classList.remove('active');
  if (sectionBundaries) {
    menuElement.classList.add('active');
  }
}