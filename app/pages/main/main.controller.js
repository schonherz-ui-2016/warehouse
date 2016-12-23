(function () {
    angular
        .module('warehouse')
        .controller('main', function ($scope, api) {

            var vm = this;
            vm.sortByOptions = {
                options: [
                    { name: "Address", value: "address" },
                    { name: "Date", value: "createdAt" },
                    { name: "Name", value: "name" }
                ],
                selectedOption: { name: "Date", value: "createdAt" }
            };

            refresh();

            function refresh() {
                api.getWarehouses()
                    .then(function (result) {
                        vm.warehouses = result.data;
                    })
            }

            vm.createWarehouse = function () {
                api.createWarehouse({
                    "owner": 1,
                    "name": vm.name,
                    "address": vm.address
                })
                    .then(function () {
                        refresh();
                    })
            }

        });
})();
