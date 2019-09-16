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

it('should add even class to even entries', function() {
  var button = element(by.buttonText('Add item'));
  var rows = element.all(by.repeater('item in items'));

  expect(rows.get(0).getAttribute('class')).not.toMatch(/even/);
  expect(rows.get(1).getAttribute('class')).toMatch(/even/);

  button.click();

  expect(rows.get(0).getAttribute('class')).not.toMatch(/even/);
  expect(rows.get(1).getAttribute('class')).toMatch(/even/);
});