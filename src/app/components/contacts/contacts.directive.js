(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myContacts', myContacts);

  /** @ngInject */
  function myContacts() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/contacts/contacts.html',
      scope: {
        creationDate: '='
      },
      controller: ContactsController,
      controllerAs: 'c',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ContactsController() {
      

    }
  }

})();
