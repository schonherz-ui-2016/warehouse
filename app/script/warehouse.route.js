
(function () {
    angular
        .module('warehouse')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/warehouse',{
                    templateUrl: 'pages/main/main.html',
                    controller: 'main'
                })
        })
})();
