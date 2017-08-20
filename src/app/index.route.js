(function () {
    'use strict';

    angular
        .module('nelsonworks')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                abstract: true,
                url: '',
                templateUrl: 'app/layout/content.html'
            })
            .state('index.main', {
                url: '/main',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('index.blog', {
                url: '/blog',
                templateUrl: 'app/blog/blog.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            })
            .state('index.contact', {
                url: '/contact',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/main');
    }

})();
