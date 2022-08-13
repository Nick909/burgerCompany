const menu = $('.list-menu');
const stado = [];

$(function () {
  selectList();
})

function selectList() {
  for(let i = 0; i < menu.length; i += 1) {
    $(menu[i]).on('touchstart', dragStart);
    $(menu[i]).on('mousedown', dragStart);
    $(menu[i]).siblings().children().on('click', dragStart)
    stado.push({translatePosition: 0, menu: menu[i]});
  }
}


function dragStart(event) {
  event.preventDefault();
  
  const middleScreen = $(window).width() / 2;
  let posX;
  let me;
  let indice
  
  if (event.type === "touchstart") {
    posX  = event.touches[0].clientX;
    indice = stado.findIndex((e) => e.menu === this)
    me = $(this);
  } else if (event.type === 'click') {
    me = $(this).parent().siblings();
    indice = stado.findIndex((e) => e.menu === me[0])
    posX  = event.clientX;
    console.log(indice, me, posX);
  } else {
    posX  = event.touches[0].clientX;
    indice = stado.findIndex((e) => e.menu === this)
    me = $(this);
  }

  const item = me.children;
  const arrows = me.siblings()[0].children;

  me.css('transition', '0.8s ease');
  
  if (posX < middleScreen  && stado[indice].translatePosition < 0) { 
    stado[indice].translatePosition += 100;
    arrows[0].classList.add('active');
    setTimeout(() => arrows[0].classList.remove('active'), 300);
  } 
  else if (posX > middleScreen && stado[indice].translatePosition > (100 * (item.length)) * -1) {
    stado[indice].translatePosition -= 100;
    arrows[1].classList.add('active');
    setTimeout(() => arrows[1].classList.remove('active'), 300);
  }

  me.css('transform', `translate(${stado[indice].translatePosition}%)`);
}
