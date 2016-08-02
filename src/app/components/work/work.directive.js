(function() {
  'use strict';

  angular
    .module('mysite')
    .directive('myWork', myWork);

  /** @ngInject */
  function myWork() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/work/work.html',
      scope: {
        creationDate: '='
      },
      controller: WorkController,
      controllerAs: 'w',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WorkController() {
      var w = this;

      w.events = [{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'Web integrator / UI designer consultant',
        subtitle: 'Alten - France',
        content: 'Restyling and creation by scratch of graphic design of UIs, thinking about the User Experience and the possible technical issues . Using of the Material Design guidelines provided by Google. Create functional web pages using HTML5 and CSS3 starting from the mockups. Cross browser and cross device development'
      }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Frontend developer',
        subtitle: 'Bitmama - Italy',
        content: 'Client side development and management on web portals in the automotive sector (Fiat, Lancia) for several European markets. Use of Microsoft SharePoint CMS, version control SVN and cross browser development using HTML5, CSS3 and Javascript (with JQuery and AJAX).'
      }, {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Intern for Master Thesis',
        subtitle: 'Eurecom Telecom Paris Tech - France',
        content: 'Design and development of HyperTED: a web application able to browse and search through Media Fragments of TED Talks recommending related contents according to semantic entities extracted in the subtitles.'
      }];
    }
  }

})();
