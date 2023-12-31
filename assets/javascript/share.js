// This API function is used to launch the 'share' facility within the browser

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'macroBLASTER',
      text: 'Use this great tool to find out your daily macros and boost your exercise results!',
      url: 'https://rchrdmess.github.io/MS2_macroBLASTER/'
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.error('Error sharing:', error));
  } else {
    console.log('Web Share API not supported');
  }
}

// It is linked to the element with the ID 'shareButton' and is triggered when the element is clicked

document.getElementById('shareButton').addEventListener('click', sharePage);
