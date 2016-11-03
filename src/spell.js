var result;


function spellcheck(newSearchTerm) {
  spellCheckActive = true;
var domainName = 'https://api.cognitive.microsoft.com/bing/v5.0/spellcheck/?Text='
var searchTerm = newSearchTerm;
var suggResult;
var apiAddress = `${domainName}${searchTerm}`
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function () {
      result = JSON.parse(xhr.responseText);
      console.log(result);
      console.log(result.flaggedTokens);
      if (result.flaggedTokens.length > 0) {
      suggResult=result.flaggedTokens[0].suggestions[0].suggestion;
      document.getElementById('spell-check').innerText = "Did you mean ";
      document.getElementById('searchWord').innerText = suggResult+"?";
    } else {
      document.getElementById('spell-check').innerText = "";
      document.getElementById('searchWord').innerText ="";
      foodFinder.nutrition(searchTerm);
      }
    });

    document.getElementById('searchWord').onclick= function(){
      document.getElementById('spell-check').innerText = "";
      document.getElementById('searchWord').innerText ="";
      nutrition(suggResult);
    }
xhr.open('POST', apiAddress);
xhr.setRequestHeader("Ocp-Apim-Subscription-Key", spellApiKey);
xhr.send(`Text=${searchTerm}`);

// getElementById('id')
};

// OLD RECIPE API - Keep until Cleo has spoken to Sohil
// curl "https://api.edamam.com/search"
// API Documentation https://developer.edamam.com/edamam-docs-recipe-api
// var domainName = 'http://api.edamam.com/search?q='
// var searchTerm = 'chicken'
// var apiAddress = `${domainName}${searchTerm}&app_id=${apiID}&appKey=${apiKey}`
// var xhr = new XMLHttpRequest();
// xhr.addEventListener('load', function () {
//      var result = JSON.parse(xhr.responseText);
//      console.log(result)
//    });
// xhr.open('GET', 'https://api.edamam.com/search?q=chicken&app_id=2661affb&app_key=e3db13fe071c31488320ed143a61ebd8');
// hr.send();
