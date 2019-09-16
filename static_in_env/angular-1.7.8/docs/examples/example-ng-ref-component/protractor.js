it('should publish the toggle into the scope', function() {
  var toggle = element(by.buttonText('Toggle'));
  expect(toggle.evaluate('myToggle.isOpen()')).toEqual(false);
  toggle.click();
  expect(toggle.evaluate('myToggle.isOpen()')).toEqual(true);
});