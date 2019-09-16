describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ng-ref-scopes/index.html");
  });
  
var OuterToggle = function() {
  this.toggle = function() {
    element(by.buttonText('Outer Toggle')).click();
  };
  this.isOpen = function() {
    return element.all(by.binding('outerToggle.isOpen()')).first().getText();
  };
};
var NgRepeatToggle = function(i) {
  var parent = element.all(by.repeater('(index, value) in [1,2,3]')).get(i - 1);
  this.toggle = function() {
    element(by.buttonText('ngRepeat Toggle ' + i)).click();
  };
  this.isOpen = function() {
    return parent.element(by.binding('ngRepeatToggle.isOpen() | json')).getText();
  };
  this.isOuterOpen = function() {
    return parent.element(by.binding('outerToggle.isOpen() | json')).getText();
  };
};
var NgRepeatToggles = function() {
  var toggles = [1,2,3].map(function(i) { return new NgRepeatToggle(i); });
  this.forEach = function(fn) {
    toggles.forEach(fn);
  };
  this.isOuterOpen = function(i) {
    return toggles[i - 1].isOuterOpen();
  };
};
var NgIfToggle = function() {
  var parent = element(by.css('[ng-if]'));
  this.toggle = function() {
    element(by.buttonText('ngIf Toggle')).click();
  };
  this.isOpen = function() {
    return by.binding('ngIfToggle.isOpen() | json').getText();
  };
  this.isOuterOpen = function() {
    return parent.element(by.binding('outerToggle.isOpen() | json')).getText();
  };
};

it('should toggle the outer toggle', function() {
  var outerToggle = new OuterToggle();
  expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): false');
  outerToggle.toggle();
  expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): true');
});

it('should toggle all outer toggles', function() {
  var outerToggle = new OuterToggle();
  var repeatToggles = new NgRepeatToggles();
  var ifToggle = new NgIfToggle();
  expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): false');
  expect(repeatToggles.isOuterOpen(1)).toEqual('outerToggle.isOpen(): false');
  expect(repeatToggles.isOuterOpen(2)).toEqual('outerToggle.isOpen(): false');
  expect(repeatToggles.isOuterOpen(3)).toEqual('outerToggle.isOpen(): false');
  expect(ifToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): false');
  outerToggle.toggle();
  expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): true');
  expect(repeatToggles.isOuterOpen(1)).toEqual('outerToggle.isOpen(): true');
  expect(repeatToggles.isOuterOpen(2)).toEqual('outerToggle.isOpen(): true');
  expect(repeatToggles.isOuterOpen(3)).toEqual('outerToggle.isOpen(): true');
  expect(ifToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): true');
});

it('should toggle each repeat iteration separately', function() {
  var repeatToggles = new NgRepeatToggles();

  repeatToggles.forEach(function(repeatToggle) {
    expect(repeatToggle.isOpen()).toEqual('ngRepeatToggle.isOpen(): false');
    expect(repeatToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): false');
    repeatToggle.toggle();
    expect(repeatToggle.isOpen()).toEqual('ngRepeatToggle.isOpen(): true');
    expect(repeatToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): false');
  });
});
});