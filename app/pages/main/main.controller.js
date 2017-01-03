(function () {
    angular
        .module('warehouse')
        .controller('main', function (api) {

            var vm = this;
            vm.sortByOptions = [
                    { name: "Address", value: "address" },
                    { name: "Date", value: "createdAt" },
                    { name: "Name", value: "name" }
            ];
            vm.selectedOption = vm.sortByOptions[1];

            refresh();

            function refresh() {
                api.getAllData()
                    .then(function (result) {
                        vm.warehouses = result;
                        console.log(vm.warehouses);
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
