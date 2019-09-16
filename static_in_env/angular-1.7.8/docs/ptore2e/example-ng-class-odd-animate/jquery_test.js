describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ng-class-odd-animate/index-jquery.html");
  });
  
it('should add new entries to the beginning of the list', function() {
  var button = element(by.buttonText('Add item'));
  var rows = element.all(by.repeater('item in items'));

  expect(rows.count()).toBe(4);
  expect(rows.get(0).getText()).toBe('Item 3');
  expect(rows.get(1).getText()).toBe('Item 2');

  button.click();

  expect(rows.count()).toBe(5);
  expect(rows.get(0).getText()).toBe('Item 4');
  expect(rows.get(1).getText()).toBe('Item 3');
});

it('should add odd class to odd entries', function() {
  var button = element(by.buttonText('Add item'));
  var rows = element.all(by.repeater('item in items'));

  expect(rows.get(0).getAttribute('class')).toMatch(/odd/);
  expect(rows.get(1).getAttribute('class')).not.toMatch(/odd/);

  button.click();

  expect(rows.get(0).getAttribute('class')).toMatch(/odd/);
  expect(rows.get(1).getAttribute('class')).not.toMatch(/odd/);
});
});