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
                if (scope.obj.hasOwnProperty(prop) && prop !== "bsProperty") {
                    var sup = angular.element('<li></li>'),
                        icon = angular.element('<i class="icon"></i>');

                    if (prop.toLowerCase().indexOf('no') !== -1) {
                        icon.addClass('black-n-white');
                    }

                    if (prop.toLowerCase().indexOf('pre') !== -1) {
                        icon.addClass('pre');
                    }

                    icon.addClass(prop.toLowerCase().replace(/(bs)|(no)|(pre)|/gi, ''));
                    sup.html(' ' + (scope.obj[prop] || ''));
                    sup.prepend(icon);
                    result.append(sup);
                }
            }

            element.append(result);
        }
    }
})();
