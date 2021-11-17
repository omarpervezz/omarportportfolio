(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var burgerMenu = function() {

        $('.js-nav-toggle').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('menu-show')) {
                $('body').removeClass('menu-show');
                $('#nav_bar > .js-nav-toggle').removeClass('show');
            } else {
                $('body').addClass('menu-show');
                setTimeout(function() {
                    $('#nav_bar > .js-nav-toggle').addClass('show');
                }, 900);
            }
        })
    };
    burgerMenu();


})(jQuery);