
(function () {
    angular
        .module('warehouse')
        .controller('main', function ($scope, api) {

            var vm = this;

            init();

            function init(){
                api.login({
                    "email": "admin@example.com",
                    "password": "schonherzszalami"
                })
                    .then(function (result) {
                        api.token = "JWT " + result.data.token;
                        refresh();
                    })
            }

            function refresh(){
                api.getWarehouses()
                    .then(function (result) {
                        vm.warehouses = result.data;
                    })
            }

            $scope.createWarehouse = function () {
                api.createWarehouse({
                    "owner": 1,
                    "name": $scope.name,
                    "address":$scope.address
                })
                    .then(function () {
                        refresh();
                    })
            }

        });
})();
