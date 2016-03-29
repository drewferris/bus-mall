function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleImageClick (event) {
  // console.log('event.target: ', event.target);
  // console.log('hello from handleImageClick event handler.');
  var imagesToBeClicked = document.getElementsByClassName('images-to-be-clicked');

  for (var i = 0; i < imagesToBeClicked.length; i++){
    imagesToBeClicked[i].addEventListener('click', handleImageClick);
  }
}

// var firstImage = document.createElement('img');
// firstImage.setAttribute('src', imageOne);
// document.getElementById('image-one').appendChild(firstImage);

// var secondImage = document.createElement('img');
// secondImage.setAttribute('src', imageTwo);
// document.getElementById('image-two').appendChild(secondImage);

// var thirdImage = document.createElement('img');
// thirdImage.setAttribute('src', imageThree);
// document.getElementById('image-three').appendChild(thirdImage);

function CreateImage(src, title){
  this.src = src;
  this.alt = title;
  this.title = title;
  this.numClicks = 0;
  this.numDisplay = 0;
}

var images = [];
var globalTotalClicks = 0;
var globalImageDisplayedTotal = 0;

images.push(new CreateImage('img/bag.jpg', 'bag title'));
images.push(new CreateImage('img/banana.jpg', 'banana title'));
images.push(new CreateImage('img/bathroom.jpg', 'bathroom title'));
images.push(new CreateImage('img/boots.jpg', 'boots title'));
images.push(new CreateImage('img/breakfast.jpg', 'breakfast title'));
images.push(new CreateImage('img/bubblegum.jpg', 'bubblegum title'));
images.push(new CreateImage('img/chair.jpg', 'chair title'));
images.push(new CreateImage('img/cthulhu.jpg', 'cthulhu title'));
images.push(new CreateImage('img/dog-duck.jpg', 'dog-duck title'));
images.push(new CreateImage('img/dragon.jpg', 'dragon title'));
images.push(new CreateImage('img/pen.jpg', 'pen title'));
images.push(new CreateImage('img/pet-sweep.jpg', 'pet-sweep title'));
images.push(new CreateImage('img/scissors.jpg', 'scissors title'));
console.log(images, ' are the images');
images.push(new CreateImage('img/shark.jpg', 'shark title'));
images.push(new CreateImage('img/sweep.png', 'sweep title'));
images.push(new CreateImage('img/tauntaun.jpg', 'tauntaun title'));
images.push(new CreateImage('img/unicorn.jpg', 'unicorn title'));
images.push(new CreateImage('img/usb.gif', 'usb title'));
images.push(new CreateImage('img/water-can.jpg', 'water-can title'));
images.push(new CreateImage('img/wine-glass.jpg', 'wine-glass title'));

function getThreeRandomImage(images){
  var imageIndexOne = getRandomIntInclusive(0, images.length - 1);
  var imageIndexTwo = getRandomIntInclusive(0, images.length - 1);
  var imageIndexThree = getRandomIntInclusive(0, images.length - 1);

  var imageObjOne = images[imageIndexOne];
  var imageObjTwo = images[imageIndexTwo];
  var imageObjThree = images[imageIndexThree];
  return [imageObjOne, imageObjTwo, imageObjThree];

};

// function deleteImages(imageOne, imageTwo, imageThree) {
//   firstImage.removeChild(imageOne);
//   secondImage.removeChild(imageTwo);
//   thirdImage.removeChild(imgThree);
// }

function displayThreeImages() {
  var imageSurvayContainer = document.getElementById('image-survay-container');
  imageSurvayContainer.textContent = '';
  var threeImageObjects = getThreeRandomImage(images);
  var imageOne = document.createElement('img');
  imageOne.setAttribute('src', threeImageObjects[0].src);
  var imageTwo = document.createElement('img');
  imageTwo.setAttribute('src', threeImageObjects[1].src);
  var imageThree = document.createElement('img');
  imageThree.setAttribute('src', threeImageObjects[2].src);
  imageSurvayContainer.appendChild(imageOne);
  imageSurvayContainer.appendChild(imageTwo);
  imageSurvayContainer.appendChild(imageThree);
}

displayThreeImages();
// function userImageClickEvent(event) {
//   globalTotalClicks++;
//   if(globalTotalClicks < 25) {
//     deleteImages(imageOne, imageTwo, imageThree);
//     displayThreeImages(imageOne, imageTwo, imageThree);
//   } else {
//     deleteImages(imageOne, imageTwo, imageThree);
//     alert('you clicked 25 times');
//   }
//   for(var i = 0; i < images.length; i++){
//     var currentImgSrc = event.target.src;
//     if(images[i].src === currentImgSrc)
//       images[i].numClicks++;
//   }
