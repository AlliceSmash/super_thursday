// JavaScript source code
$(window).load(function () {
    var timer;
    function showNextSlide() {
        var $active = $("#slides img.active");
        var $temp = $active.next('img');
        var $next = $temp.length ? $temp : $('#slides img:first-child');

        $active.fadeOut({ duration: 1000 }).removeClass("active");
        $next.fadeIn({ duration: 1000 }).addClass("active");
    };

    function showPrevSlide() {
        var $active = $("#slides img.active");
        var $temp = $active.prev('img');
        var $next = $temp.length ? $temp : $('#slides img:last-child');
        $active.fadeOut({ duration: 1000 }).removeClass("active");
        $next.fadeIn({ duration: 1000 }).addClass("active");
    };

    $("#controls #right").click(function () {
        clearInterval(timer);
        showNextSlide();
        timer = setInterval(showNextSlide, 5000);
    });

    $("#controls #left").click(function () {
        clearInterval(timer);
        showPrevSlide();
        timer = setInterval(showNextSlide, 5000);
    });

    (function () {
        $("#slides img:not(.active)").hide();
        timer = setInterval( showNextSlide, 5000 );
    })();
});