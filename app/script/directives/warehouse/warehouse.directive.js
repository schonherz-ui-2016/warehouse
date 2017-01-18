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
                data: '=warehouse',
                onFillProductModal: '<'
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
        vm.deleteProduct = deleteProduct;

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

        function updateQuantities(product, warehouse) {
            var updatedWarehouse = angular.copy(warehouse);
            if (!product.quantity) {
                product.quantity = 0;
            }
            updatedWarehouse.quantities.forEach(function (p) {
                if (p.id == product.id) {
                    p.value = product.quantity;
                }
            });
            api.updateWarehouse({
                id: updatedWarehouse.id,
                quantities: updatedWarehouse.quantities
            })
                .then(function () {
                    $rootScope.refresh();
                })
        }

        function deleteProduct(warehouse, product){
            var modified = angular.copy(warehouse);
            var index = modified.quantities.map(function (quantity) {
                return quantity.id;
            }).indexOf(product.id);
            modified.quantities.splice(index, 1);
            api.updateWarehouse({
                id: modified.id,
                quantities: modified.quantities
            })
                .then(function () {
                    $rootScope.refresh();
                })
        }
    }
})();