import angular from 'angular';
import math from './test-import-ctrl';

const app = angular.module('app', []);

app.controller('test', function($scope) {
  $scope.test = 'this is $scope!!';
});

export default app;
