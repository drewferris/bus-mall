function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleImageClick (event) {
  console.log('event.target: ', event.target);
  console.log('hello from handleImageClick event handler.');
}

var imagesToBeClicked = document.getElementsByClassName('images-to-be-clicked');

for (var i = 0; i < imagesToBeClicked.length; i++){
  imagesToBeClicked[i].addEventListener('click', handleImageClick);
}

function CreateImage(src, title){
  this.src = src;
  this.alt = title;
  this.title = title;
  this.numClicks = 0;
  this.numDisplay = 0;
}

var images = [];

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
console.log(images);
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

  var imageOne = images[imageIndexOne];
  var imageTwo = images[imageIndexTwo];
  var imageThree = images[imageIndexThree];
  return [imageOne, imageTwo, imageThree];

};
