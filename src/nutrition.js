function nutrition(newSearchTerm) {
var firstPart = 'https://api.nutritionix.com/v1_1/search/'
var secondPart = '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cnf_sugars%2Cnf_calories%2Cnf_dietary_fiber&'
var searchTerm = newSearchTerm
var apiAddress = `${firstPart}${searchTerm}${secondPart}appId=${apiID}&appKey=${apiKey}`
var xhr = new XMLHttpRequest();

  function appendNutrition (tagType, name, tagContent = '') {
    var newtritionElement = document.createElement(tagType);
    var newtritionContent = document.createTextNode(name + ' ' + tagContent);
    newtritionElement.append(newtritionContent);
    document.getElementById('ingredient').append(newtritionElement);
  }

xhr.addEventListener('load', function () {
  var result = JSON.parse(xhr.responseText);
  var itemName = result.hits[0].fields.item_name;
  var calories = result.hits[0].fields.nf_calories;
  var sugars = result.hits[0].fields.nf_sugars;
  var fiber = result.hits[0].fields.nf_dietary_fiber;
  appendNutrition('h3', newSearchTerm);
  appendNutrition('p', 'Calories: ', calories);
  appendNutrition('p', 'Sugars: ', sugars);
  appendNutrition('p', 'Fiber: ', fiber);
  console.log(itemName);
});

xhr.open('GET', apiAddress);
xhr.send();
};
