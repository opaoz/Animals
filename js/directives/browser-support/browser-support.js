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
            scope.$watch('obj', function (newV) {
                if (newV) {
                    var result = angular.element('<ul class="browsers"></ul>'),
                        prop;

                    for (prop in scope.obj) {
                        if (scope.obj.hasOwnProperty(prop) && prop !== "bsProperty") {
                            var sup = angular.element('<li></li>'),
                                icon = angular.element('<i class="icon"></i>'),
                                browser = prop.toLowerCase().replace(/(bs)|(no)|(pre)|/gi, '');

                            if (prop.toLowerCase().indexOf('no') !== -1) {
                                icon.addClass('black-n-white');
                            }

                            if (prop.toLowerCase().indexOf('pre') !== -1) {
                                icon.addClass('pre');
                            }

                            if (scope.obj[prop]) {
                                sup.html('<span class="badge">' + scope.obj[prop] + '</span>');
                            }
                            icon.addClass(browser);
                            sup.prepend(icon);
                            result.append(sup);
                        }
                    }
                }

                element.append(result);
            });
        }
    }
})();
