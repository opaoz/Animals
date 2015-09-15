(function () {
    'use strict';

    angular
        .module('cssTester')
        .directive('browserSupport', directive);

    directive.$inject = [];

    function directive() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                obj: '=browserSupport'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var result = angular.element('<ul></ul>'),
                prop;
            
            for (prop in scope.obj) {
                if (scope.obj.hasOwnProperty(prop)) {
                    
                }
            }
        }
    }
})();
