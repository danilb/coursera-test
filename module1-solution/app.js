(function (){
  'use strict';

  angular.module('module1', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.lunchMessage = "Let's check!";

      $scope.checkLunch = function () {

            if (!$scope.lunchMenu) {
              $scope.lunchMessage="Please enter data first."
              return;
            };

            var items = $scope.lunchMenu.split(',');
            var count = 0;

            for (var i=0; i<items.length; i++) {
              var item = items[i];
              if (item!='') {
                count++;
              };
            }

            if (count <= 3) {
              $scope.lunchMessage="Enjoy!"
            } else {
              $scope.lunchMessage="Too much!"
            }
      }
  };

})()
