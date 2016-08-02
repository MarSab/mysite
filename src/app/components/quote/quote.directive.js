(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myQuote', myQuote);

  /** @ngInject */
  function myQuote() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/quote/quote.html',
      scope: {
          creationDate: '='
      },
      controller: QuoteController,
      controllerAs: 'qu',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function QuoteController() {

    }
  }

})();
