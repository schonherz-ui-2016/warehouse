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

    function Controller() {
        var vm = this;
        activate();

        function activate() {
        }
    }
})();