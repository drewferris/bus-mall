function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function handleImageClick (event) {
  globalTotalClicks++;
  if(globalTotalClicks === 25) {
    alert('you clicked 25 times');
    return;
  }
  for(var i = 0; i < images.length; i++){
    var currentImgId = event.target.id;
    console.log('currentImageId:', currentImgId);
    if(images[i].id === currentImgId){
      images[i].numClicks++;
    }
  }

  displayThreeImages();

};

function CreateImage(src, title){
  this.src = src;
  this.alt = title;
  this.title = title;
  this.numClicks = 0;
  this.numDisplay = 0;
};

var images = [];
var globalTotalClicks = 0;

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
console.log(images + ' are the images');
images.push(new CreateImage('img/shark.jpg', 'shark title'));
images.push(new CreateImage('img/sweep.png', 'sweep title'));
images.push(new CreateImage('img/tauntaun.jpg', 'tauntaun title'));
images.push(new CreateImage('img/unicorn.jpg', 'unicorn title'));
images.push(new CreateImage('img/usb.gif', 'usb title'));
images.push(new CreateImage('img/water-can.jpg', 'water-can title'));
images.push(new CreateImage('img/wine-glass.jpg', 'wine-glass title'));

function getThreeRandomImage(images){
  var imageIndexOne = getRandomIntInclusive(0, images.length - 1);

  var imageIndexTwo = imageIndexOne;
  while (imageIndexTwo === imageIndexOne){
    var imageIndexTwo = getRandomIntInclusive(0, images.length - 1);
  }

  var imageIndexThree = imageIndexOne;
  while (imageIndexThree === imageIndexOne || imageIndexThree === imageIndexTwo){
    var imageIndexThree = getRandomIntInclusive(0, images.length - 1);
  }

  var imageObjOne = images[imageIndexOne];
  var imageObjTwo = images[imageIndexTwo];
  var imageObjThree = images[imageIndexThree];
  return [imageObjOne, imageObjTwo, imageObjThree];
};

function displayThreeImages() {
  var imageSurvayContainer = document.getElementById('image-survay-container');
  imageSurvayContainer.textContent = '';
  var threeImageObjects = getThreeRandomImage(images);
  var imageOne = document.createElement('img');
  imageOne.setAttribute('src', threeImageObjects[0].src);
  imageOne.setAttribute('id', threeImageObjects[0].title);
  var imageTwo = document.createElement('img');
  imageTwo.setAttribute('src', threeImageObjects[1].src);
  imageTwo.setAttribute('id', threeImageObjects[1].title);
  var imageThree = document.createElement('img');
  imageThree.setAttribute('src', threeImageObjects[2].src);
  imageThree.setAttribute('id', threeImageObjects[2].title);

  imageOne.addEventListener('click', handleImageClick);
  imageTwo.addEventListener('click', handleImageClick);
  imageThree.addEventListener('click', handleImageClick);

  imageSurvayContainer.appendChild(imageOne);
  imageSurvayContainer.appendChild(imageTwo);
  imageSurvayContainer.appendChild(imageThree);
};

displayThreeImages();

// //code review
// var clicksforgraph = newBarDataSet('clicks', 'rgba('','',''));
// clicksforgraph.getFields(images, 'numClicks');
//
// var displaysforgraph = newBarDataSet('cdisplays', 'rgba('','',''));
// clicksforgraph.getFields(images, 'numDisplay');
//
// var percent = newBarDataSet('cdisplays', 'rgba('','',''));
// clicksforgraph.setFields(images, 'timesClicked', 'numDisplay');
// function Bardataset() {
//   this.label
//   fillColor
//   strokeColor
//   highlightFill
//   highlightStroke
//   this.data = []
// }
// function BarChartData() {
//
// }
//
// Bardataset.prototype.getFields = function(imputArry, field)
// for (var i = 0; i < images.length; i++) {}
// this.data.push(images[i][field])
//
// Bardataset.prototype.getPercentclicked = function (images, field1, field2)
// for( var i = 0; i < images.length ; i++; {
//   var percentCLicked = parseInt(images[i][field1]) / parseInt(image[i][field2])
//   if (isNaN(percentCLicked)) {
//   this.data.push(0)
// } else {
//   this.data.push(percentCLicked);
// }
// }
//
// Bardataset.prototype.getLabels = function(imputArry, field)
// for (var i = 0; i < images.length; i++) {}
// this.data.push(images[i][field])
//
// var setupbarDataChart = new BarChartData();
// setUpBarChart.pushData(clicksforgraph)
// setUpBarChart.pushData(displaysforgraph)
// setUpBarChart.pushData(percentCLicked)
// setUpBarChart.getLabel(cimages, 'title');
//
// var ctx = document.getElementById('myChart').getContext('2d')
