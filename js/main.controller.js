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

        function activate() {
            vm.props = propService.getStyles();
        }
    }
})();
