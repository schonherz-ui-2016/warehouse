(function () {
    angular
        .module('warehouse')
        .controller('main', function (api, $scope, $rootScope, $location) {

            var vm = this;
            vm.sortByOptions = [
                {name: "Address", value: "address"},
                {name: "Date", value: "createdAt"},
                {name: "Name", value: "name"}
            ];
            vm.selectedOption = vm.sortByOptions[1];

            $rootScope.refresh = function () {
                api.getAllData()
                    .then(function (result) {
                        vm.warehouses = result;
                        console.log(vm.warehouses);
                        vm.clearModal();
                    })
            };

            $scope.refresh();

            vm.createWarehouse = function () {
                if ($rootScope.method == "POST") {

                    api.createWarehouse({
                        "owner": 1,
                        "name": $rootScope.name,
                        "address": $rootScope.address
                    })
                        .then(function () {
                            $scope.refresh();
                        })
                } else {
                    api.updateWarehouse({
                        "id": $rootScope.editId,
                        "name": $rootScope.name,
                        "address": $rootScope.address
                    })
                        .then(function () {
                            $scope.refresh();
                        })
                }
            };

            vm.logout = function () {
                api.logout();
                $location.path('/');
            };

            vm.clearModal = function () {
                $rootScope.method = "POST";
                $rootScope.name = "";
                $rootScope.address = "";
                $rootScope.editId = undefined;
            };

        });
})();