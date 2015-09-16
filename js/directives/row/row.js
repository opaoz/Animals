(function () {
    'use strict';

    angular
        .module('cssTester')
        .directive('styleRow', directive);

    directive.$inject = [];

    function directive() {
        var directive = {
            restrict: 'A',
            replace: true,
            //templateUrl: 'directives/row/row.html'
            template: '<div class="col-sm-3"  ng-repeat="prop in props track by $index"><div class="thumbnail"><div class="caption" ><h3 correct-size min="10" max="30" ng-bind-html="prop.bsProperty | htmlBook | trust"></h3><p browser-support="prop"></p></div></div></div>',
            scope: {
                props: '=styleRow'
            }

        };
        return directive;
    }
})();
