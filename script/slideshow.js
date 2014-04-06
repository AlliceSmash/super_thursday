// JavaScript source code
$(window).load(function () {
    var timer;
    function showNextSlide() {
        var $active = $("#slides li.active");
        var $temp = $active.next('li');
        var $next = $temp.length ? $temp : $('#slides li:first-child');

        $active.fadeOut({ duration: 1000 }).removeClass("active");
        $next.fadeIn({ duration: 1000 }).addClass("active");
    };

    $("#container").hover(
        function () {
            clearInterval(timer);
        },
        function () {
            timer = setInterval(showNextSlide, 3000);
        }
    );

    (function () {
        $("#slides li:not(.active)").hide();
        timer = setInterval( showNextSlide, 3000 );
    })();
});