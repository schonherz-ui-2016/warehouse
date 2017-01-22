(function () {
    angular
        .module('warehouse')
        .directive('category', Directive);

    function Directive() {
        return {
            bindToController: true,
            controller: Controller,
            controllerAs: 'category',
            restrict: 'A',
            templateUrl: './script/directives/category/category.html',

            scope: {
                data: '=category'
            }
        };
    }

    function Controller($rootScope, api) {
        var vm = this;

        vm.onAddProduct = onAddProduct;

        activate();

        function activate() {
        }

        function onAddProduct(product) {
            const warehouse = $rootScope.warehouse;
            const foundProduct = warehouse.quantities.find(function(q) {
                return q.id === product.id;
            });
            if (!foundProduct) {
                const data = {
                    id: product.id,
                    value: 0
                };
                warehouse.quantities.push(data);
                api.updateWarehouse(warehouse)
                    .then(function() {
                        $rootScope.refresh();
                    });
            }
        }
    }
})();