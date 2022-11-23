
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //паралакс кнопка
//   'use strict'

// window.onload = function(){
//   const parallax = document.querySelector('body');

//   if(parallax){
//     const blick = document.querySelector('.blick');
  
//     const forBlick = 4;
//     let positionX = 0;
//     let positionY= 0;
//     let cordYproc = 0;
//     let cordXproc = 0;

//     const speed = 0.05;
  
  
 
//     function setMausParallax(){
 
//       const distX = cordXproc - positionX; 
//       const distY = cordYproc - positionY; 

//       positionX = positionX + (distX * speed);
//       positionY = positionY + (distY * speed);
    
//       blick.style.cssText = `transform: translate(${positionX / forBlick}%, ${positionY / forBlick}%);`;
//      requestAnimationFrame(setMausParallax);
//     }
//     // setMausParallax();

//     parallax.addEventListener('mousemove', function(e){
//       //получаем ширину и высоту блока
//       const parallaxWidth = parallax.offsetWidth;
//       const parallaxHeight = parallax.offsetHeight;
 
//       //курсор мыши по середине, объекты в исходном положенииж
    
//       const cordX = e.pageX - parallaxWidth / 2;
//       const cordY = e.pageY - parallaxHeight / 10;
//   console.log(cordY)
//       //какой процент от w или h преодоллет курсор относительно центра
//       cordXproc = cordX / parallaxWidth * 100;
//       cordYproc = cordY / parallaxHeight * 100 + 5;
  
//     })
//   }
  
// }