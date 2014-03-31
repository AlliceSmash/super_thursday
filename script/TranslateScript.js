// JavaScript source code
$(document).ready(function () {
    $('.zoomlink').hover(
        function () {
            var hOffset = ($(window).width() / 2 - $(this).outerWidth() / 2 - $(this).offset().left);
            var vOffset = ($(window).height() / 2 - $(this).outerHeight() / 2 - $(this).offset().top);
            var horizontalDist = hOffset === 0 ? '0px' : hOffset > 0 ? '50px' : '-50px';
            var verticalDist = vOffset === 0 ? '0px' : vOffset > 0 ? '30px' : '-30px';
            $(this).css({ transform: 'scale(1.5) translate(' + horizontalDist + ',' + verticalDist + ')' })
        },

        function () {
            $(this).css({ transform: 'scale(1/1.5)' })
        });

});