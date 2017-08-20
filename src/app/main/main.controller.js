/**
 * Created by Mike on 14/05/2017.
 */
(function () {
    'use strict';

    angular
        .module('nelsonworks')
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController($window) {
        var vm = this;
        var SCROLL_HEIGHT = 500;

        vm.header = 'Michael Nelson';

        angular.element(window).scroll(function () {
            var scroll = angular.element(this).scrollTop();
            if (scroll > SCROLL_HEIGHT) {
                if(angular.element('.banner-content').hasClass('banner-transition')){
                    angular.element('.banner-content').addClass('change-bg');
                }
            }

            if (scroll < SCROLL_HEIGHT) {
                angular.element('.banner-content').removeClass('change-bg');
            }

            var parallax = document.querySelectorAll(".parallax"),
                speed = 0.5;

            [].slice.call(parallax).forEach(function(el){
                var windowYOffset, elBackgrounPos;
                windowYOffset = $window.pageYOffset;
                elBackgrounPos = "50%" + (windowYOffset * speed * -1) + "px";

                el.style.backgroundPosition = elBackgrounPos;
            });
        });

    }

})();
