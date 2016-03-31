function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function handleImageClick (event) {
  globalTotalClicks++;
  if(globalTotalClicks === 25) {
    alert('you clicked 25 times');
    return;
  }
  var currentImgId = event.target.id;
  for(var i = 0; i < images.length; i++){
    console.log('currentImageId:', currentImgId);
    if(images[i].title === currentImgId){
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
  // GOAL: get a reference to the image-survay-container
  // clear it and then add three imaages with data from three random
  // create image objects.

  // get the reference to the image-survay-container
  var imageSurvayContainer = document.getElementById('image-survay-container');
  // clear the image-survay-container
  imageSurvayContainer.textContent = '';

  // get three random createImage objects
  var threeImageObjects = getThreeRandomImage(images);

  // increment there numDisplay values
  threeImageObjects[0].numDisplay++;
  threeImageObjects[1].numDisplay++;
  threeImageObjects[2].numDisplay++;

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


// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         each one of these dataset objects is going to represent the data for eather clicks, displays, or presentages
//         {
//             label: "clicks",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "Num Displys",
//             fillColor: "rgba(151,187,205,0.5)",
//             strokeColor: "rgba(151,187,205,0.8)",
//             highlightFill: "rgba(151,187,205,0.75)",
//             highlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };




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
