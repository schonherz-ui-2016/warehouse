(function () {
    angular
        .module('warehouse')
        .directive('warehouse', Directive);

    function Directive() {
        return {
            bindToController: true,
            controller: Controller,
            controllerAs: 'warehouse',
            restrict: 'A',
            templateUrl: './script/directives/warehouse/warehouse.html',

            scope: {
                data: '=warehouse'
            }
        };
    }

    function Controller(api, $rootScope) {
        var vm = this;
        vm.onDelete = onDelete;
        vm.sortProducts = sortProducts;
        vm.onEdit = onEdit;
        vm.sortName = "name";
        vm.sortReverse = false;
        vm.updateQuantities = updateQuantities;

        activate();

        function activate() {
        }

        function onDelete(id){
            api.deleteWarehouse(id)
                .then(function () {
                    $rootScope.refresh();
                    console.log("Warehouse is deleted");
                });
        }

        function onEdit(id){
            api.getWarehouse(id)
                .then(function (result) {
                    $rootScope.method = "PUT";
                    $rootScope.name = result.data.name;
                    $rootScope.address = result.data.address;
                    $rootScope.editId = result.data.id;
                })
        }

        function sortProducts(sortName) {
            vm.sortName = sortName;
            vm.sortReverse = !vm.sortReverse;
        }

        function updateQuantities(product, warehouseId) {
            if (product.quantity == undefined) {
                product.quantity = 0;
            }
            api.getWarehouse(warehouseId)
                .then(function (result) {
                    var currentWarehouse = result.data;
                    currentWarehouse.quantities.forEach(function (p) {
                        if (p.id == product.id) {
                            p.value = product.quantity;
                        }
                    });
                    api.updateWarehouse(currentWarehouse)
                        .then(function () {
                            $rootScope.refresh();
                        })
                })
        }

    }
})();