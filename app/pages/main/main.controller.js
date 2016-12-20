
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
                    .then(function () {
                        refresh();
                    })
            }

            function refresh(){
                api.getWarehouses()
                    .then(function (result) {
                        vm.warehouses = result.data;
                    })
            }

            vm.createWarehouse = function () {
                api.createWarehouse({
                    "owner": 1,
                    "name": vm.name,
                    "address":vm.address
                })
                    .then(function () {
                        refresh();
                    })
            }

        });
})();
