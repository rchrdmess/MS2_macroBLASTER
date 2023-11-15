let male = document.getElementById('male');
male.addEventListener('click', changeMaleBg);

let female = document.getElementById('female');
female.addEventListener('click', changeFemaleBg);

function changeMaleBg(event) {
  if (female.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  female.style.backgroundColor = '#f77fbe';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeFemaleBg(event) {
  if (male.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  male.style.backgroundColor = '#5398fe';
  } else {
  this.style.backgroundColor = 'green';
  }
}