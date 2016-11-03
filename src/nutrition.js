var foodFinder = (function () {
  var self = {}, active = false, spellCheckActive = false;

  self.getActive = function() {
    return active;
  }

  self.appendNutrition = function (tagType, name, tagContent = '', targetID = 'ingredient') {
    var newtritionElement = document.createElement(tagType);
    var newtritionContent = document.createTextNode(name + ' ' + tagContent);
    newtritionElement.appendChild(newtritionContent);
    document.getElementById(targetID).appendChild(newtritionElement);
  }

  self.nutrition = function (searchTerm) {
    var urlBase = 'https://api.nutritionix.com/v1_1/search/'
    var urlEnd = '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cnf_sugars%2Cnf_calories%2Cnf_dietary_fiber&'
    var apiAddress = `${urlBase}${searchTerm}${urlEnd}appId=${nutritionApiID}&appKey=${nutritionApiKey}`
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      var result = JSON.parse(xhr.responseText);
      var itemName = result.hits[0].fields.item_name;
      var calories = result.hits[0].fields.nf_calories;
      var sugars = result.hits[0].fields.nf_sugars;
      var fiber = result.hits[0].fields.nf_dietary_fiber;
      if (result.total_hits === 0) {
        foodFinder.appendNutrition('p', searchTerm + " isn't really something you should eat...", '', 'error');
        document.getElementById('results').style.visibility = 'hidden';
        document.getElementById('about').style.visibility = 'hidden';
        return;
      }
      foodFinder.appendNutrition('h3', itemName);
      foodFinder.appendNutrition('p', 'Calories: ', calories);
      foodFinder.appendNutrition('p', 'Sugars: ', sugars);
      foodFinder.appendNutrition('p', 'Fiber: ', fiber);
      // document.getElementById('ingredient').innerHTML = '';
      document.getElementById('error').innerHTML = '';
      document.getElementById('results').style.visibility = 'visible';
      document.getElementById('about').style.visibility = 'hidden';
    });

    xhr.open('GET', apiAddress);
    xhr.send();
  }


  document.getElementById('search').addEventListener('click', function() {
  active = true;
    if (!document.getElementById('input').value) {
      document.getElementById('error').innerHTML = 'We need an input! Ya silly';
      document.getElementById('results').style.visibility = 'hidden';
      document.getElementById('about').style.visibility = 'visible';
      return;
    }
    var inputField = document.getElementById('input').value;
    console.log('yo')
    spellcheck(inputField);
  })

  return self;
})();
