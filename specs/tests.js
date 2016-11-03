QUnit.test('clicking on search activates function', function( assert ) {
  console.log(active);
  document.getElementById('search').click();
  console.log("after click: ",active);
  assert.equal(active, true, 'Passed');
});
