function nutrition(newSearchTerm) {
var firstPart = 'https://api.nutritionix.com/v1_1/search/'
var secondPart = '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cnf_sugars%2Cnf_calories%2Cnf_dietary_fiber&'
var searchTerm = newSearchTerm
var apiAddress = `${firstPart}${searchTerm}${secondPart}appId=${nutritionApiID}&appKey=${nutritionApiKey}`
var xhr = new XMLHttpRequest();

  function appendNutrition (tagType, name, tagContent = '', targetID = 'ingredient') {
    var newtritionElement = document.createElement(tagType);
    var newtritionContent = document.createTextNode(name + ' ' + tagContent);
    newtritionElement.append(newtritionContent);
    document.getElementById(targetID).append(newtritionElement);
  }

xhr.addEventListener('load', function () {
  document.getElementById('ingredient').innerHTML = '';
  document.getElementById('error').innerHTML = '';
  document.getElementById('input').value = '';
  var result = JSON.parse(xhr.responseText);
  if (result.total_hits === 0) {
    appendNutrition('p', searchTerm + " isn't really something you should eat...", '', 'error');
    document.getElementById('results').style.visibility = 'hidden';
    document.getElementById('about').style.visibility = 'visible';
    return;
  }
  var itemName = result.hits[0].fields.item_name;
  var calories = result.hits[0].fields.nf_calories;
  var sugars = result.hits[0].fields.nf_sugars;
  var fiber = result.hits[0].fields.nf_dietary_fiber;
  appendNutrition('h3', newSearchTerm);
  appendNutrition('p', 'Calories: ', calories);
  appendNutrition('p', 'Sugars: ', sugars);
  appendNutrition('p', 'Fiber: ', fiber);
  console.log(itemName);
  document.getElementById('results').style.visibility = 'visible';
  document.getElementById('about').style.visibility = 'hidden';
});

xhr.open('GET', apiAddress);
xhr.send();
};


document.getElementById('search').addEventListener('click', function() {
  if (!document.getElementById('input').value) {
    document.getElementById('ingredient').innerHTML = '';
    document.getElementById('error').innerHTML = 'We need an input! Ya silly';
    document.getElementById('results').style.visibility = 'hidden';
    document.getElementById('about').style.visibility = 'visible';
    return;
  }
  var inputField = document.getElementById('input').value;
  spellcheck(inputField);
})
