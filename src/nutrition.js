var firstPart = 'https://api.nutritionix.com/v1_1/search/'
var secondPart = '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cnf_calories%2Citem_type=3&app'
var searchTerm = 'aubergine'
var apiAddress = `${firstPart}${searchTerm}${secondPart}Id=${apiID}&appKey=${apiKey}`
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function () {
      var result = JSON.parse(xhr.responseText);
      console.log(result)
      console.log(result.hits[0].fields.item_name);
      console.log(result.hits[0].fields.nf_calories, 'calories');

    });

xhr.open('GET', apiAddress);
xhr.send();
