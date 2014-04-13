$(window).load(function () {
    var timer;
    $("#slides img:not(.active)").hide();

    function showSlide(direction, fadeSpeed) {
        var $active = $("#slides img.active");
        var $activeNav = $("#tbncontainer .activeNav");
        var temp, $next, $nextNav;
        if( typeof(fadespeed) === "undefined" ) { fadespeed = 1000;};

        $next = getNextElement($active, direction);
        $nextNav = getNextElement($activeNav, direction);
        doTransition($active, $next, $activeNav, $nextNav, fadespeed);
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

    function doTransition(currElement, nextElement, currNav, nextNav, fadespeed) {
        currElement.fadeOut({ duration: fadespeed }).removeClass("active");
        currNav.removeClass("activeNav");
        nextNav.addClass("activeNav");
        nextElement.fadeIn({ duration: fadespeed }).addClass("active");
    }

    function showNextSlide() {
        showSlide("next");
    };

    function showPrevSlide() {
        showSlide("prev");
    };

    $("#right").click(function () {
//        clearInterval(timer);
        showNextSlide();
//        timer = setInterval(showNextSlide, 5000);
    });

    $("#left").click(function () {
 //       clearInterval(timer);
        showPrevSlide();
//        timer = setInterval(showNextSlide, 5000);
    });

    $("#scrollleft").click(function () {
        showSlide("prev");
    });

    $("#scrollright").click(function () {
        showSlide("next");
    });

    $("#tbncontainer img").click(function () {
        //find current slide to fade
        var $currElem = $("#container img.active");
        var $currNav = $("#tbncontainer img.activeNav");
        //find which one to show
        var index = $(this).index();
        var $toShow = $("#container img").eq(index);
        doTransition($currElem, $toShow, $currNav, $(this), 600);
    });

    (function () {
        
       // timer = setInterval( showNextSlide, 5000 );
    })();
});