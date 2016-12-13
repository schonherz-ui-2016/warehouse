/**
 * Created on 2016.12.12.
 */
(function () {
    angular
        .module('warehouse')
        .directive('${name}', Directive);

    function Directive() {
        return {
            bindToController: true,
            controller: Controller,
            controllerAs: '${name}',
            restrict: 'A',
            templateUrl: '',
            scope: {}
        };
    }

    function Controller() {
        var vm = this;
        activate();

        function activate() {
        }
    }
})();