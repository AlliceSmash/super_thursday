$(window).load(function () {
    var timer;
    function showSlide(direction, fadeSpeed) {
        var $active = $("#slides img.active");
        var $activeNav = $("#tbncontainer .activeNav");
        var temp, $next, $nextNav;
        if( typeof(speed) === "undefined" ) { speed =1000;};

        $next = getNextElement($active, direction);
        $nextNav = getNextElement($activeNav, direction);
        $active.fadeOut({ duration: fadeSpeed }).removeClass("active");
        $activeNav.removeClass("activeNav");
        $nextNav.addClass("activeNav");
        $next.fadeIn({ duration: fadeSpeed }).addClass("active");
    }

    function getNextElement(currElement, direction) {
        if (direction.toLowerCase() === "next") {
            $temp = currElement.next('img');
            nextElement = $temp.length ? $temp : currElement.parent().children(':first-child');
        } else {
            $temp = currElement.prev('img');
            nextElement = $temp.length ? $temp : currElement.parent().children(':last-child');
        }
        return nextElement;
    }

    function showNextSlide() {
        showSlide("next", 1000);
    };

    function showPrevSlide() {
        showSlide("prev", 1000);
    };

    $("#right").click(function () {
        clearInterval(timer);
        showNextSlide();
        timer = setInterval(showNextSlide, 5000);
    });

    $("#left").click(function () {
        clearInterval(timer);
        showPrevSlide();
        timer = setInterval(showNextSlide, 5000);
    });

    $("#scrollleft").click(function () {
        showSlide("prev", 1000);
    });

    $("#scrollright").click(function () {
        showSlide("next", 1000);
    });

    $("#tbncontainer img").hover(function () {
        //var index = $(this).index();
        //var $active = $("#container img:eq(index)");
    });

    (function () {
        $("#slides img:not(.active)").hide();
        //timer = setInterval( showNextSlide, 5000 );
    })();
});