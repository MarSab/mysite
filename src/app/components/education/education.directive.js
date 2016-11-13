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
        badgeClass: 'education education-1',
        badgeIconClass: 'school',
        title: 'Cinema and Media Engineering Master Degree',
        subtitle: 'March 2015',
        content: 'Politecnico di Torino - Torino, Italy'

      },{
        badgeClass: 'education education-2',
        badgeIconClass: 'school',
        title: 'Erasmus',
        subtitle: 'April - September 2014',
        content: 'Eurecom Telecom Paris Tech - Sophia Antipolis, France'
      }, {
        badgeClass: 'education education-3',
        badgeIconClass: 'school',
        title: 'Cinema and Media Engineering Bachelor\'s Degree',
        subtitle: 'September 2012',
        content: 'Politecnico di Torino - Torino, Italy'
      }, {
        badgeClass: 'education education-4',
        badgeIconClass: 'school',
        title: 'Classical High School Diploma',
        subtitle: '2008',
        content: 'Liceo Classico D\'Adda - Varallo (VC), Italy'
      }];

      ed.animateElementIn = function($el) {
        $el.removeClass('timeline-hidden');
        $el.addClass('bounce-in'); // this example leverages animate.css classes
    };
    }
  }

})();
