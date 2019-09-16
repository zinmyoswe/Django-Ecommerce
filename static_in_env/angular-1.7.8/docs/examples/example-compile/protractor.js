it('should auto compile', function() {
  var textarea = $('textarea');
  var output = $('div[compile]');
  // The initial state reads 'Hello AngularJS'.
  expect(output.getText()).toBe('Hello AngularJS');
  textarea.clear();
  textarea.sendKeys('{{name}}!');
  expect(output.getText()).toBe('AngularJS!');
});