var bubbles = document.querySelectorAll('.center__bubble');
var texts = document.querySelectorAll('p');


function Ð(tag){
  var x = document.querySelector(`.${tag}`);
  return x; 
}

function hid() {
  bubbles.forEach(bubble => {
    bubble.classList.add('hidden');
  });
  Ð('solar-syst').style.opacity = '1';
  texts.forEach(text => {
    text.classList.add('valid');
  })
}

Ð('button').addEventListener('click', function () {
  Ð('solar-syst').style.display = "block";
  setTimeout(function () {
    Ð('buttontwo').classList.add('is-inlineblock')
  },6000);
  setTimeout(hid, 500);
  Ð('logo').classList.add('zoom');
  Ð('button').classList.add('hidden');
});


var skill = (planet, card)=>{
  planet.addEventListener('click', ()=>{
    card.style.display = 'block';
  })
}

skill(Ð('mars'), Ð('js'));
skill(Ð('earth'), Ð('html'));
skill(Ð('mercury'), Ð('css'));
skill(Ð('venus'), Ð('php'));





