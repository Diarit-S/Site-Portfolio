var bubbles = document.querySelectorAll('.center__bubble');
var texts = document.querySelectorAll('p');
var skills = document.querySelectorAll('skill');

// Ð is the function that select the node who has the class parameter

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

Ð('button').addEventListener('click', function (e) {
  Ð('solar-syst').style.display = "block";
  setTimeout(function () {
    Ð('buttontwo').classList.add('is-inlineblock')
  },6000);
  setTimeout(hid, 500);
  Ð('logo').classList.add('zoom');
  Ð('button').classList.add('hidden');
  e.stopPropagation();
});


var skill = (planet, card)=>{
  planet.addEventListener('click', (e)=>{
    card.style.display = 'flex';
    setTimeout(() => {
      card.classList.add('is_extend');
    }, 100);
    e.stopPropagation();
  });
  card.addEventListener('click', (e)=>{
    card.classList.remove('is_extend');
    setTimeout(() => {
      card.style.display = "none";
    }, 400);
    e.stopPropagation();
  });
};


// skills.forEach(skill => {
//   skill.addEventListener('click', (e)=>{
//     skill.classList.remove('is_extend');
//     e.stopPropagation();
//   });
// });

skill(Ð('mars'), Ð('js'));
skill(Ð('earth'), Ð('html-css'));
skill(Ð('venus'), Ð('php-sql'));
skill(Ð('mercury'), Ð('tools'));





