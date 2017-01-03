(function() {
    angular
        .module('app')
        .directive('warehouse', function() {
            return {
                restrict: 'A',
                templateUrl: '/script/directives/warehouse/warehouse.html',
                scope: {
                    onDelete: '<'
                }
            };
        });
})();