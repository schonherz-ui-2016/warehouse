/**
 * Created on 2016.12.12..
 */
(function () {
    angular
        .module('warehouse')
        .controller('registration', function ($scope, api, $location) {
            var vm = this;

            vm.isInvalid = false;
            vm.isPasswordsNotEqual = false;
            vm.error = false;
            vm.passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";

            vm.registration = function () {
                vm.isInvalid = false;
                vm.isPasswordsNotEqual = false;
                vm.error = false;

                if (vm.password == undefined) {
                    vm.isInvalid = true;
                }
                else if (vm.password !== vm.confirmPassword) {
                    vm.isPasswordsNotEqual = true;
                }
                else {
                    api.registration({
                        "email": vm.email,
                        "password": vm.password,
                        "name": vm.name
                    })
                        .then(function (result) {
                            console.log(result.config.data);
                            $location.path('/');
                        })
                        .catch(function (error) {
                            console.log(error);
                            vm.error = true;
                        });
                }
            }
        });
})();