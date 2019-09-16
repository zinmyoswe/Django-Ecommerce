describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-compile/index.html");
  });
  
it('should auto compile', function() {
  var textarea = $('textarea');
  var output = $('div[compile]');
  // The initial state reads 'Hello AngularJS'.
  expect(output.getText()).toBe('Hello AngularJS');
  textarea.clear();
  textarea.sendKeys('{{name}}!');
  expect(output.getText()).toBe('AngularJS!');
});
});