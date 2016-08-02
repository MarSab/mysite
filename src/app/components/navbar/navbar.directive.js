(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myNav', myNav);

  /** @ngInject */
  function myNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: AppCtrl,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AppCtrl($scope) {
      $scope.currentNavItem = 'home';
    }
  }

})();
