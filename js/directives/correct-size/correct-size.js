(function () {
    'use strict';

    angular.module('cssTester')
        .directive('correctSize', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    $timeout(activate, 100);

                    function activate() {
                        element = $(element);
                        correctFontSize(attrs.min, attrs.max, element);

                        $(window).resize(function () {
                            correctFontSize(attrs.min, attrs.max, element);
                        });
                    }

                    function correctFontSize(minSize, maxSize, $container) {
                        var fontSize = +maxSize;

                        $container.css('font-size', fontSize);

                        while ($container.hasScrollBar() && fontSize > minSize) {
                            $container.css('font-size', --fontSize);
                        }
                    }
                }
            };
        });

})();
