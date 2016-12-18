
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
                .when('/',{
                    templateUrl: 'pages/login/login.html',
                    controller: 'login',
                    controllerAs: 'login'
                })
                .when('/registration',{
                    templateUrl: 'pages/registration/registration.html',
                    controller: 'registration',
                    controllerAs: 'registration'
                })

                .otherwise({
                    templateUrl: 'pages/404/404.html'
                });
        });
})();
