const listList = $('.list-menu__item');
const menu = $('.list-menu');

listList.on('mousemove', dragStart);

let translatePosition = 0;

function dragStart(event) {
  const middleScreen = $(window).width() / 2;
  const posX = event.clientX;
  
  menu.css('transition', '0.8s ease');
  
  if (posX < middleScreen  && translatePosition < 0) { translatePosition += 100; } 
  else if (posX > middleScreen &&translatePosition > (100 * (listList.length - 1)) * -1) { 
    translatePosition -= 100; 
  }

  console.log(translatePosition, (100 * (listList.length - 2)) * -1)
  menu.css('transform', `translate(${translatePosition}%)`)
  // console.log(posX);

}