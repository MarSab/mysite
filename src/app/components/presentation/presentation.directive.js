(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myPresentation', myPresentation);

  /** @ngInject */
  function myPresentation() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/presentation/presentation.html',
      scope: {
        creationDate: '='
      },
      controller: PresentationController,
      controllerAs: 'pr',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PresentationController() {
      var pr = this;

      pr.imagePath = '../assets/images/me.jpg';
    }
  }

})();
