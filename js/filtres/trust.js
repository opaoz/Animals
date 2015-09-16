(function () {
    'use strict';

    angular
        .module('cssTester')
        .filter('trust', trust);

    function trust($sce) {

        return trustFilter;

        function trustFilter(value) {
            return $sce.trustAsHtml(value);
        };
    }
})();
