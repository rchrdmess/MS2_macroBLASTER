let bulk = document.getElementById('bulk');
bulk.addEventListener('click', changeBulkBg);

let cut = document.getElementById('cut');
cut.addEventListener('click', changeCutBg);

let maintain = document.getElementById('maintain');
maintain.addEventListener('click', changeMaintainBg);

function changeBulkBg(event) {
  alert("A resistance training routine is recommended when choosing this option.");
  if (cut.style.backgroundColor === 'green' || maintain.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  cut.style.backgroundColor = '#D2B48C';
  maintain.style.backgroundColor = '#B87333';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeCutBg(event) {
  if (bulk.style.backgroundColor === 'green' || maintain.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  bulk.style.backgroundColor = '#7B3F00';
  maintain.style.backgroundColor = '#B87333';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeMaintainBg(event) {
  if (bulk.style.backgroundColor === 'green' || cut.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  bulk.style.backgroundColor = '#7B3F00';
  cut.style.backgroundColor = '#D2B48C';
  } else {
  this.style.backgroundColor = 'green';
  }
}