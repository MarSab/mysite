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
      var mh = this;

      angular.element(document).ready(function(){
        mh.images= ['../assets/images/bg/bg_1.jpg', '../assets/images/bg/bg_2.jpg', '../assets/images/bg/bg_3.jpg', '../assets/images/bg/bg_4.jpg', '../assets/images/bg/bg_5.jpg', '../assets/images/bg/bg_6.jpg', '../assets/images/bg/bg_7.jpg', '../assets/images/bg/bg_8.jpg'];
        mh.randomIndex = Math.floor(Math.random() * mh.images.length);
        mh.classToAdd = mh.images[mh.randomIndex];

});

    }
  }

})();
