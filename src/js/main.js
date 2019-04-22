var bubbles = document.querySelectorAll('.center__bubbles__bubble');
var texts = document.querySelectorAll('.description__line');
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
  Ð('solarSyst').style.opacity = '1';
  Ð('skills-title').style.opacity = '1';
  texts.forEach(text => {
    text.classList.add('valid');
  })
}

Ð('button').addEventListener('click', function (e) {

  Ð('skills-title').style.display = "block";
  Ð('solarSyst').style.display = "block";
  setTimeout(function () {
    Ð('buttontwo').classList.add('is-inlineblock')
  },6000);
  setTimeout(hid, 500);
  Ð('center__logo').classList.add('zoom');
  Ð('button').classList.add('hidden');
  e.stopPropagation();
});


// On click on a planet, his "card" opens

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


// Creation of a table with the html class of each planet and his skill section

var tabSkills = [
  { planet : 'solarSyst__mars',
    skill : 'skill--js'
  },
  { planet : 'solarSyst__earth',
    skill : 'skill--html-css'
  },
  { planet : 'solarSyst__venus',
    skill : 'skill--php-sql'
  },
  { planet : 'solarSyst__mercury',
    skill : 'skill--tools'
  }
]


// Call skill function for each element of tabSkills table

tabSkills.forEach(object => {
  skill(Ð(`${object.planet}`), Ð(`${object.skill}`));
});






