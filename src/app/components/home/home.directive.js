(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myHome', myHome);

  /** @ngInject */
  function myHome() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/home/home.html',
      scope: {
          creationDate: '='
      },
      controller: HomeController,
      controllerAs: 'mh',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HomeController() {
      //var mh = this;

    }
  }

})();
