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

    function Controller() {
        var vm = this;
        vm.onDelete = onDelete;

        activate();

        function activate() {
        }

        function onDelete(){

            console.log("torolve");
        }
    }

})();