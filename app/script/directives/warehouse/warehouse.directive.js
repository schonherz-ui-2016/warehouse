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
        vm.sortName = "name";
        vm.sortReverse = false;

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

        function sortProducts(sortName) {
            vm.sortName = sortName;
            vm.sortReverse = !vm.sortReverse;
        }

    }

})();