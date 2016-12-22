/**
 * Created on 2016.12.12..
 */
(function () {
    angular
        .module('warehouse')
        .controller('registration', function ($scope, api, $location) {
            var vm = this;
            vm.registration = function () {
                api.registration({
                    "email": vm.email,
                    "password": vm.password
                })
                    .then(function (result) {
                        console.log(result.config.data);
                        $location.path('/');
                    });
            }
        });
})();