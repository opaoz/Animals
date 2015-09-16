(function () {
    'use strict';

    angular
        .module('cssTester')
        .filter('htmlBook', htmlBook);

    function htmlBook() {
        var href = 'http://htmlbook.ru/css/';

        return htmlBookFilter;

        function htmlBookFilter(value) {
            var old = value;

            value = value.replace('@', '');
            while (value.indexOf('-') !== value.lastIndexOf('-')) {
                value = value.replace(value.substr(value.lastIndexOf('-')), '');
            }

            return '<a href="' + href + value + '">' + old + '</a>';
        };
    }
})();
