
(function () {
    angular
        .module('warehouse')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/warehouse',{
                    templateUrl: 'pages/main/main.html',
                    controller: 'main',
                    controllerAs: 'main'
                })
                .otherwise({
                    templateUrl: 'pages/404/404.html'
                });
        });
})();
