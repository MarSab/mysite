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
}
    /** @ngInject */
    function ContactsController($scope, NgMap, NavigatorGeolocation, GeoCoder) {
      NgMap.getMap("map").then(function () {
        GeoCoder.geocode({ address: 'Place Massena, Nice' })
        .then(function () {
          $scope.mapCenter = [43.7101728, 7.2619532];
        });
      });
      $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDV-wgCPF8UIrj7SkwEHV_nL_wX9oWZGaM&callback=initMap";
      $scope.mapCenter = [43.7101728, 7.2619532];
    }


})();
