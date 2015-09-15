(function () {
    'use strict';

    angular
        .module('cssTester')
        .directive('styleRow', directive);

    directive.$inject = [];

    function directive() {
        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
            //templateUrl: 'directives/row/row.html'
            template: '<tr ng-repeat="prop in props track by $index"><td>{{$index+1}}</td><td>{{prop.bsProperty}}</td><td browser-support="prop"></td></tr>',
            scope: {
                props: '=styleRow'
            }

        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();
