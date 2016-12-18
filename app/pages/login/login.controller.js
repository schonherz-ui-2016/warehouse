/**
 * Created on 2016.12.12..
 */

(function () {
    angular.module('warehouse')
        .controller('login', function () {
            $scope.login = function () {
                api.login()

            }
        })
})();