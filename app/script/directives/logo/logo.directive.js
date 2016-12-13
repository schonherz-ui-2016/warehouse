(function () {
    angular
        .module('warehouse')
        .directive('logo', Directive);

    function Directive() {
        return {
            restrict: 'A',
            template: '<span class="logo glyphicon glyphicon-transfer"></span>' +
            '<span class="logo-text">Warehouse</span>'
        };
    }
})();