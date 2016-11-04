var foodFinder = (function () {

  var self = {}, active = false, spellCheckActive = false, APIresult, suggResult, domainName, apiAddress,nutritionURL ;

  function changeDomElements(elementID,status){
    document.getElementById(elementID).innerText=status;
  }
  self.getSpellCheckActive=function(){return spellCheckActive;}

  self.getActive = function() { return active;}

  self.getAPIresult=function(){return APIresult;}
  function getSugarAmount(APIresult){ return APIresult.hits[0].fields.nf_sugars;}

  function getItemName(APIresult){ return APIresult.hits[0].fields.item_name;}

  function getCaloriesAmount(APIresult){ return APIresult.hits[0].fields.nf_calories;}

  function getFiberAmount(APIresult){ return APIresult.hits[0].fields.nf_dietary_fiber;}

  function ingredientExist(key){return key>0;}

  function spellMistake(list){return list.length>0}

  function nutrition(searchTerm) {
    domainName = 'https://api.nutritionix.com/v1_1/search/'
    nutritionURL = '?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cnf_sugars%2Cnf_calories%2Cnf_dietary_fiber&'
    apiAddress = `${domainName}${searchTerm}${nutritionURL}appId=${nutritionApiID}&appKey=${nutritionApiKey}`
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      APIresult = JSON.parse(xhr.responseText);
      if (ingredientExist(APIresult.total_hits))
      {

        changeDomElements('itemsName',getItemName(APIresult));
        changeDomElements('caloriesCount','Calories: '+getCaloriesAmount(APIresult));
        changeDomElements('sugarsCount','Sugars: '+getSugarAmount(APIresult));
        changeDomElements('fiberCount','Fiber: '+getFiberAmount(APIresult));
        changeDomElements('error','')
        document.getElementById('results').style.visibility = 'visible';
        document.getElementById('about').style.visibility = 'hidden';

      }
      else{
        changeDomElements('messageBoard',searchTerm + ' isn\'t really something you should eat...')
        document.getElementById('results').style.visibility = 'hidden';
        document.getElementById('about').style.visibility = 'hidden';
    }
  });
    xhr.open('GET', apiAddress); xhr.send();
  }

  self.spellcheck = function(searchTerm) {
  spellCheckActive = true;
  domainName = 'https://api.cognitive.microsoft.com/bing/v5.0/spellcheck/?Text='
  apiAddress = `${domainName}${searchTerm}`
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
        APIresult = JSON.parse(xhr.responseText);
        if (spellMistake(APIresult.flaggedTokens)) {//if spell mistake exist
        suggResult=APIresult.flaggedTokens[0].suggestions[0].suggestion;
        changeDomElements('messageBoard','Did you mean ')
        changeDomElements('searchWord',suggResult+'?')
      }
       else {
        nutrition(searchTerm);
        changeDomElements('messageBoard','');//clear message board
        changeDomElements('searchWord','');//clear the suggword from screen
        }
      });

  xhr.open('POST', apiAddress);
  xhr.setRequestHeader('Ocp-Apim-Subscription-Key', spellApiKey);
  xhr.send(`Text=${searchTerm}`);
  };

  //clicking on the suggestion result
  document.getElementById('searchWord').onclick= function(){
    changeDomElements('messageBoard','');
    changeDomElements('searchWord','');
    nutrition(suggResult);
      }

  document.getElementById('search').addEventListener('click', function() {
    active = true;
    //hide carrot and donut

    document.getElementById('pics').style.display = 'none';
    document.getElementById('img-upload').style.display = 'block';

    //show upload
    if (!document.getElementById('input').value) {//checking if the value of input is null
      changeDomElements('error','We need an input! Ya silly')
      document.getElementById('results').style.visibility = 'hidden';
      document.getElementById('about').style.visibility = 'visible';
      }
    else {
      var inputField = document.getElementById('input').value;
      foodFinder.spellcheck(inputField);
         }
  })

  return self;
})();
