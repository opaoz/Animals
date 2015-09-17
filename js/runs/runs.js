(function () {
    'use strict';

    angular.module('cssTester')
        .run(function () {
            $.fn.hasScrollBar = function () {
                var container = this.get(0);

                return container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth;
            };

            $(document).on('click', 'a[href^=#]', function () {
                console.log('click');
                $('html, body').animate({
                    scrollTop: $('[name="' + this.hash.slice(1) + '"]').offset().top
                }, 2000);
                return false;
            });

            $(window).scroll(function () {
                if ($(this).scrollTop() > 350) {
                    $('#toTop').fadeIn()
                } else {
                    $('#toTop').fadeOut();
                }
            });
        });
})();
