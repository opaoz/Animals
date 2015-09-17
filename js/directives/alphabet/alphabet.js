(function () {
    'use strict';

    angular
        .module('cssTester')
        .directive('alphabet', alphabet);

    function alphabet() {

        var directive = {
            restrict: 'A',
            template: '<a ng-repeat="letter in letters" href="#{{letter}}">{{letter}}</a>',
            scope: {
                letters: '=alphabet'
            },
            link: function (scope) {
                scope.letters = scope.letters.sort();
            }
        };
        return directive;

    }
})();
