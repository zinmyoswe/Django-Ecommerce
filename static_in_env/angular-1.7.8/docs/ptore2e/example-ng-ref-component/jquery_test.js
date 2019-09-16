describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ng-ref-component/index-jquery.html");
  });
  
it('should publish the toggle into the scope', function() {
  var toggle = element(by.buttonText('Toggle'));
  expect(toggle.evaluate('myToggle.isOpen()')).toEqual(false);
  toggle.click();
  expect(toggle.evaluate('myToggle.isOpen()')).toEqual(true);
});
});