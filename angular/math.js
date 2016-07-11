var math = angular.module('math', []);

// angular.module('math')
math.controller('addCtrl', function ($scope) {
  var add = this;
  add.initNum = 10;
  add.val1 = 0;
  add.val2 = 0;
  add.result = add.val1 + add.val2;

  add.calc = function () {
    add.result = parseInt(add.val1) + parseInt(add.val2);
  };
});


math.controller('multiCtrl', function ($scope) {
  var multi = this;
  multi.initNum = 20;
  $scope.scopeTest = 'scopeTest';

  // multi.calc = function(val) {
  //   return base + val;
  // };
});

export default math;
