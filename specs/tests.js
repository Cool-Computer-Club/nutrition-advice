QUnit.test('clicking on search activates function', function( assert ) {
  console.log(active);
  document.getElementById('search').click();
  console.log("after click: ",active);
  assert.equal(active, true, 'Passed');
});

QUnit.test('if user searches nothing, error is shown', function( assert ) {
  document.getElementById('input').value = '';
  document.getElementById('search').click();
  assert.equal(document.getElementById('error').innerHTML, 'We need an input! Ya silly', 'Passed');
});
