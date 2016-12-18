
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
                .when('/login',{
                    templateUrl: 'pages/login/login.html',
                    controller: 'loginController'
                })
                .when('/register',{
                    templateUrl: 'pages/registration/registration.html',
                    controller: 'registrationController'
                })

                .otherwise({
                    templateUrl: 'pages/404/404.html'
                });
        });
})();
