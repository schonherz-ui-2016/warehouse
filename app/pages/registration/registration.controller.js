/**
 * Created on 2016.12.12..
 */
(function () {
    angular.module('warehouse')
        .controller('registration', function () {
            $scope.registration = function () {
                api.registration()

            }
        })
})();