let none = document.getElementById('none');
none.addEventListener('click', changeNoneBg);

let light = document.getElementById('light');
light.addEventListener('click', changeLightBg);

let moderate = document.getElementById('moderate');
moderate.addEventListener('click', changeModerateBg);

let high = document.getElementById('high');
high.addEventListener('click', changeHighBg);

let extreme = document.getElementById('extreme');
extreme.addEventListener('click', changeExtremeBg);

function changeNoneBg(event) {
  if (light.style.backgroundColor === 'green' || moderate.style.backgroundColor === 'green' || high.style.backgroundColor === 'green' || extreme.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  light.style.backgroundColor = '#F1959B';
  moderate.style.backgroundColor = '#F07470';
  high.style.backgroundColor = '#EA4C46';
  extreme.style.backgroundColor = '#DC1C13';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeLightBg(event) {
  if (none.style.backgroundColor === 'green' || moderate.style.backgroundColor === 'green' || high.style.backgroundColor === 'green' || extreme.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  none.style.backgroundColor = '#F6BDC0';
  moderate.style.backgroundColor = '#F07470';
  high.style.backgroundColor = '#EA4C46';
  extreme.style.backgroundColor = '#DC1C13';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeModerateBg(event) {
  if (none.style.backgroundColor === 'green' || light.style.backgroundColor === 'green' || high.style.backgroundColor === 'green' || extreme.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  none.style.backgroundColor = '#F6BDC0';
  light.style.backgroundColor = '#F1959B';
  high.style.backgroundColor = '#EA4C46';
  extreme.style.backgroundColor = '#DC1C13';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeHighBg(event) {
  if (none.style.backgroundColor === 'green' || light.style.backgroundColor === 'green' || moderate.style.backgroundColor === 'green' || extreme.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  none.style.backgroundColor = '#F6BDC0';
  light.style.backgroundColor = '#F1959B';
  moderate.style.backgroundColor = '#F07470';
  extreme.style.backgroundColor = '#DC1C13';
  } else {
  this.style.backgroundColor = 'green';
  }
}

function changeExtremeBg(event) {
  if (none.style.backgroundColor === 'green' || light.style.backgroundColor === 'green' || moderate.style.backgroundColor === 'green' || high.style.backgroundColor === 'green') {
  this.style.backgroundColor = 'green';
  none.style.backgroundColor = '#F6BDC0';
  light.style.backgroundColor = '#F1959B';
  moderate.style.backgroundColor = '#F07470';
  high.style.backgroundColor = '#EA4C46';
  } else {
  this.style.backgroundColor = 'green';
  }
}