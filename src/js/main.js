var bubbles = document.querySelectorAll('.center__bubble');
var enter = document.querySelector('.button');
var logo = document.querySelector('.logo');
var photo = document.querySelector('.photo');
var texts = document.querySelectorAll('p');
var ball = document.querySelector('.ball');
var check = document.querySelector('.buttontwo');

function hid() {
  bubbles.forEach(bubble => {
    bubble.classList.add('hidden');
  });
  
  photo.classList.add('visible');

  texts.forEach(text => {
    text.classList.add('valid');
  })

  
  
}


enter.addEventListener('click', function () {
  
  setTimeout(function () {
    ball.classList.add('valid');
  },1500);
  setTimeout(function () {
    check.classList.add('is-inlineblock')
  },6000);
  setTimeout(hid, 500);
  logo.classList.add('zoom');
  enter.classList.add('hidden');
  
});





