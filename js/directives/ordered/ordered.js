(function () {
    'use strict';

    angular
        .module('cssTester')
        .directive('ordered', ordered);

    ordered.$inject = [];

    function ordered() {

        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
            template: '<div class="row" ng-repeat="pack in packs"><div ng-if="pack.array.length > 0" class="alert capital-row" id="{{pack.letter}}">{{pack.letter}}</div><div style-row="pack.array"></div></div>',
            scope: {
                source: '=ordered'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
            scope.packs = [];
            angular.forEach(letters, function (value) {
                scope.packs.push({
                    letter: value,
                    array: getByLetter(value)
                });
            });

            function getByLetter(letter) {
                return scope.source.filter(function (value) {
                    return value.bsProperty.toLowerCase().replace(/[^a-z]/g, '')[0] === letter;
                });
            }
        }
    }

})();
