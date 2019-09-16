it('should check both checkBoxes', function() {
  expect(element(by.id('checkFollower')).getAttribute('checked')).toBeFalsy();
  element(by.model('leader')).click();
  expect(element(by.id('checkFollower')).getAttribute('checked')).toBeTruthy();
});