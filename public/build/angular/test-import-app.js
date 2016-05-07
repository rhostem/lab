import angular from 'angular';
import anonyCtrl from './test-import-ctrl';


const app = angular.module('app', []);

app.controller('test', function($scope) {
  $scope.test = 'this is $scope!!';
});

app.controller('anonyCtrl', anonyCtrl);


export default app;
