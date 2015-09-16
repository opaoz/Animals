(function () {
    'use strict';

    angular
        .module('cssTester')
        .directive('alphabet', alphabet);

    function alphabet() {

        var directive = {
            link: link,
            restrict: 'A',
            template: '<a ng-repeat="letter in letters" href="#{{letter}}">{{letter}}</a>',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
            scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        }
    }
})();
