
/* Page works */


var panels = document.querySelectorAll('.panels__panel');


function toggleOpen() {
  this.classList.toggle('is-open');
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
});