var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');

  if (mySrc === 'images/firefox1.jpg') {
    myImage.setAttribute('src', 'images/firefox2.jpg');
  } else {
    myImage.setAttribute('src', 'images/firefox1.jpg');
  }
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Plz enter your name:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storeName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storeName;

}

myButton.onclick = function() {
  setUserName();
}
