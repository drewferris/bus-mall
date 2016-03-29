function handleImageClick (event) {
  console.log('event.target: ', event.target);
  console.log('hello from handleImageClick event handler.');
}

var imagesToBeClicked = document.getElementsByClassName('images-to-be-clicked');

for (var i = 0; i < imagesToBeClicked.length; i++){
  imagesToBeClicked[i].addEventListener('click', handleImageClick);
}

var createImage = function(src, title) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
};

var images = [];

images.push(createImage('img/bag.jpg', 'bag title'));
images.push(createImage('img/banana.jpg', 'banana title'));
images.push(createImage('img/bathroom.jpg', 'bathroom title'));
images.push(createImage('img/boots.jpg', 'boots title'));
images.push(createImage('img/breakfast.jpg', 'breakfast title'));
images.push(createImage('img/bubblegum.jpg', 'bubblegum title'));
images.push(createImage('img/chair.jpg', 'chair title'));
images.push(createImage('img/cthulhu.jpg', 'cthulhu title'));
images.push(createImage('img/dog-duck.jpg', 'dog-duck title'));
images.push(createImage('img/dragon.jpg', 'dragon title'));
images.push(createImage('img/pen.jpg', 'pen title'));
images.push(createImage('img/pet-sweep.jpg', 'pet-sweep title'));
images.push(createImage('img/scissors.jpg', 'scissors title'));
console.log(images);
images.push(createImage('img/shark.jpg', 'shark title'));
images.push(createImage('img/sweep.png', 'sweep title'));
images.push(createImage('img/tauntaun.jpg', 'tauntaun title'));
images.push(createImage('img/unicorn.jpg', 'unicorn title'));
images.push(createImage('img/usb.gif', 'usb title'));
images.push(createImage('img/water-can.jpg', 'water-can title'));
images.push(createImage('img/wine-glass.jpg', 'wine-glass title'));

function loadThreeRandomImages (images){
  random
};
