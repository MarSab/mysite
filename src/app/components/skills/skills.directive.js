(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('mySkills', mySkills);

  /** @ngInject */
  function mySkills() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/skills/skills.html',
      scope: {
          creationDate: '='
      },
      controller: SkillsController,
      controllerAs: 'sk',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SkillsController() {
    //  var sk = this;

        this.animateElementIn = function($el) {
          $el.removeClass('timeline-hidden');
          $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
          };
        
      }
  }
})();
