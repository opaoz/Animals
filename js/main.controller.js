(function () {
    'use strict';

    angular
        .module('cssTester')
        .controller('MainController', Controller);

    Controller.$inject = ['propService'];

    /* @ngInject */
    function Controller(propService) {
        var vm = this;
        activate();

        vm.analyze = function () {
            var text = vm.text,
                regexp = /([A-Za-z-]{3,}):.*;/gi,
                match,
                result = {
                    chrome: [],
                    firefox: [],
                    opera: [],
                    safari: [],
                    ie: []
                };

            while ((match = regexp.exec(text)) != null) {
                angular.forEach(vm.props, function (prop) {
                    if (match[1].toLowerCase() === prop.bsProperty.toLowerCase()) {
                        result.chrome.push(prop['bsNoChrome'] || prop['bsPreChrome'] || prop['bsChrome']);
                        result.firefox.push(prop['bsNoFirefox'] || prop['bsPreFirefox'] || prop['bsFirefox']);
                        result.opera.push(prop['bsNoOpera'] || prop['bsPreOpera'] || prop['bsOpera']);
                        result.safari.push(prop['bsNoSafari'] || prop['bsPreSafari'] || prop['bsSafari']);
                        result.ie.push(prop['bsNoIE'] || prop['bsPreIE'] || prop['bsIE']);

                        return false;
                    }
                });
            }
            vm.result = {};
            vm.result[result.chrome.max() === 0 ? 'bsNoChrome' : 'bsChrome'] = result.chrome.max();
            vm.result[result.opera.max() === 0 ? 'bsNoOpera' : 'bsOpera'] = result.opera.max();
            vm.result[result.safari.max() === 0 ? 'bsNoSafari' : 'bsSafari'] = result.safari.max();
            vm.result[result.ie.max() === 0 ? 'bsNoIE' : 'bsIE'] = result.ie.max();
            vm.result[result.firefox.max() === 0 ? 'bsNoFirefox' : 'bsFirefox'] = result.firefox.max();
            var a;
        };


        function activate() {
            vm.text = '';
            vm.props = propService.getStyles();
            /*vm.result = {
                "bsProperty": "align-content",
                "bsIE": 11,
                "bsFirefox": 28,
                "bsChrome": 21,
                "bsPreSafari": 7,
                "bsOpera": 12.1
            };*/
        }

        Array.prototype.max = function () {
            return Math.max.apply(null, this);
        };

        Array.prototype.min = function () {
            return Math.min.apply(null, this);
        };
    }
})();
