QUnit.test('clicking on search activates function', function( assert ) {
  document.getElementById('search').click();
  assert.equal(foodFinder.getActive(), true, 'Passed');
});

QUnit.test('if user searches nothing, error is shown', function( assert ) {
  document.getElementById('input').value = '';
  document.getElementById('search').click();
  assert.equal(document.getElementById('error').innerHTML, 'We need an input! Ya silly', 'Passed');
});

QUnit.test('results of nutrition API call are hidden if user puts nothing in search field', function( assert ) {
  document.getElementById('input').value = '';
  document.getElementById('search').click();
  assert.equal(document.getElementById('results').style.visibility, 'hidden', 'Passed');
});

QUnit.test('about text becomes visible again if user searches something, then clicks search with an empty field', function( assert ) {
  document.getElementById('about').style.visibility = 'hidden';
  document.getElementById('input').value = '';
  document.getElementById('search').click();
  assert.equal(document.getElementById('about').style.visibility, 'visible', 'Passed');
});

QUnit.test('clicking on search activates spellcheck function if search field is not blank', function( assert ) {
  document.getElementById('input').value = 'p';
  document.getElementById('search').click();
  assert.equal(foodFinder.getSpellCheckActive(), true, 'Passed');
});

QUnit.test('when spellCheck function is called, API is queried', function( assert ) {
  foodFinder.spellcheck();
  assert.equal(!foodFinder.getAPIresult(), true, 'Passed');
});
