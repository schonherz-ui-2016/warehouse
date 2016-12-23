/**
 * Created on 2016.12.12..
 */

(function () {
    angular.module('warehouse')
        .controller('login', function ($scope, api, $location) {
            var vm = this;
            vm.alert = false;
            vm.login = function () {
                api.login(vm.email, vm.password)
                    .then(function () {
                        $location.path('/warehouse');
                    })
                    .catch(function () {
                        vm.alert = true;
                });
            }
        });
})();