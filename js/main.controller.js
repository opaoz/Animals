(function () {
    'use strict';
    //mememe?
    angular
        .module('cssTester')
        .controller('MainController', Controller);

    Controller.$inject = ['propService'];

    function Controller(propService) {
        var vm = this;
        activate();

        vm.analyze = function () {
            var text = vm.text,
                regexp = /([A-Za-z-]{3,}):.*;/gi,
                match, once = false,
                result = {
                    chrome: [],
                    firefox: [],
                    opera: [],
                    safari: [],
                    ie: []
                };

            while ((match = regexp.exec(text)) != null) {
                once = true;
                angular.forEach(vm.props, function (prop) {
                    if (match[1].toLowerCase() === prop.bsProperty.toLowerCase()) {
                        result.chrome.push(getBrowserVersion('Chrome', prop));
                        result.firefox.push(getBrowserVersion('Firefox', prop));
                        result.opera.push(getBrowserVersion('Opera', prop));
                        result.safari.push(getBrowserVersion('Safari', prop));
                        result.ie.push(getBrowserVersion('IE', prop));

                        return false;
                    }
                });
            }

            if (once) {
                vm.result = {};
                setBrowserVersion('Chrome');
                setBrowserVersion('Firefox');
                setBrowserVersion('Opera');
                setBrowserVersion('Safari');
                setBrowserVersion('IE');
            }

            function getBrowserVersion(browser, obj) {
                return obj['bsNo' + browser] || obj['bsPre' + browser] || obj['bs' + browser];
            }

            function setBrowserVersion(browser) {
                vm.result[result[browser.toLowerCase()].max() === 0 ? 'bsNo' + browser : 'bs' + browser] = result[browser.toLowerCase()].max();
            }
        };

        function activate() {
            vm.text = '';
            vm.props = propService.getStyles();
            vm.alphabet = [];
            angular.forEach(vm.props, function (value) {
                var first = value.bsProperty.toLowerCase().replace(/[^a-z]/g, '')[0];
                if (vm.alphabet.indexOf(first) === -1) {
                    vm.alphabet.push(first);
                }
            });
        }

        Array.prototype.max = function () {
            var array = this.filter(function (value) {
                    return value !== undefined;
                }),
                result = Math.max.apply(null, array);
            return result > 0 ? result : 0;
        };

    }
})();
