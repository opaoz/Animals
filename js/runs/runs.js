(function () {
    'use strict';

    angular.module('cssTester')
        .run(function () {
            jQuery.fn.hasScrollBar = function () {
                var container = this.get(0);

                return container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth;
            };
        });
})();
