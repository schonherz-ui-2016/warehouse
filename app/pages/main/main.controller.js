(function () {
    angular
        .module('warehouse')
<<<<<<< HEAD
        .controller('main', function (api, $scope, $rootScope) {
=======
        .controller('main', function (api, $location) {
>>>>>>> e5ccd38028311df451f628e1138b0a1c84b68dfc

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
            };

            vm.logout = function () {
                api.logout();
                $location.path('/');
            }

        });
})();
