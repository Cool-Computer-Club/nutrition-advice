var describeImage = new XMLHttpRequest();

describeImage.addEventListener('load', function() {
<<<<<<< HEAD
    var result = JSON.parse(describeImage.responseText)
    foodFinder.spellcheck(result.tags[0].name);
  })
=======
  var result = JSON.parse(describeImage.responseText);
  console.log(result);
  foodFinder.spellcheck(result.tags[0].name);
})
>>>>>>> a805920252a2f6566f4abf673006bb195eb9b076

var getImageDescription = function (url) {
  describeImage.open('POST', 'https://api.projectoxford.ai/vision/v1.0/tag?maxCandidates=1');
  describeImage.setRequestHeader('Content-Type', 'application/json');
  describeImage.setRequestHeader('Ocp-Apim-Subscription-Key', computerVisionKey);
  var body = JSON.stringify({url : url});
  describeImage.send(body);
}

document.getElementById('img-upload').addEventListener('click', function(){
  document.getElementById('pics').style.display = 'inline';
  document.getElementById('donut').style.display = 'inline';
  document.getElementById('carrot').style.display = 'inline';
  document.getElementById('error').innerText = '';
  document.getElementById('img-upload').style.display = 'none';
})

document.getElementById('carrot').addEventListener('click', function(){
  getImageDescription('https://static.pexels.com/photos/143133/pexels-photo-143133-large.jpeg')
  document.getElementById('donut').style.display = 'none';
})

document.getElementById('donut').addEventListener('click', function(){
  getImageDescription('https://static.pexels.com/photos/41300/berliner-breakfast-bun-cake-41300-large.jpeg')
  document.getElementById('carrot').style.display = 'none';
})
