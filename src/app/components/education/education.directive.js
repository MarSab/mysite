(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myEducation', myEducation);

  /** @ngInject */
  function myEducation() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/education/education.html',
      scope: {
        creationDate: '='
      },
      controller: EducationController,
      controllerAs: 'ed',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function EducationController() {
      var ed = this;

      ed.events = [{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'Cinema and Media Engineering Master Degree',
        subtitle: 'March 2015',
        content: 'Politecnico di Torino - Torino, Italy'

      },{
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Erasmus',
        subtitle: 'April - September 2014',
        content: 'Eurecom Telecom Paris Tech - Sophia Antipolis, France'
      }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Cinema and Media Engineering Bachelor\'s Degree',
        subtitle: 'September 2012',
        content: 'Politecnico di Torino - Torino, Italy'
      }, {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Classical High School Diploma',
        subtitle: '2008',
        content: 'Liceo Classico D\'Adda - Varallo (VC), Italy'
      }];
    }
  }

})();
