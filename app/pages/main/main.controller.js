(function () {
    angular
        .module('warehouse')
        .controller('main', function (api, $scope, $rootScope) {

            var vm = this;
            vm.sortByOptions = [
                    { name: "Address", value: "address" },
                    { name: "Date", value: "createdAt" },
                    { name: "Name", value: "name" }
            ];
            vm.selectedOption = vm.sortByOptions[1];

            $rootScope.refresh = function()  {
                api.getAllData()
                    .then(function (result) {
                        vm.warehouses = result;
                        console.log(vm.warehouses);
                    })
            };

            $scope.refresh();

            vm.createWarehouse = function () {
                api.createWarehouse({
                    "owner": 1,
                    "name": vm.name,
                    "address": vm.address
                })
                    .then(function () {
                        $scope.refresh();
                    })
            }

        });
})();
