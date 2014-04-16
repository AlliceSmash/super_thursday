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
        //changeOridinal(direction);
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

    $("#tbncontainer img").click(function () {
        //find current slide to fade
        var $currElem = $("#container img.active");
        var $currNav = $("#tbncontainer img.activeNav");
        //find which one to show
        var index = $(this).index();
        var $toShow = $("#container img").eq(index);
        doTransition($currElem, $toShow, $currNav, $(this), 600);
    });

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
        //showSlide("prev");
        changeOridinal("prev");
    });

    $("#scrollright").click(function () {
        //showSlide("next");
        changeOridinal("next");
    });

    function showNextSlide() {
        showSlide("next");
    };

    function showPrevSlide() {
        showSlide("prev");
    };

    function changeOridinal(direction) {
        var length = $("#tbncontainer").children().length;
        var displayOrder = 0;
        var orderGroup = Modernizr.prefixed('order');

        for (var i = 0; i < length; i++) {
            var child = $("#tbncontainer").children().eq(i)[0];
            if (child && child.style) {
                if (direction === "next") {
                    displayOrder = parseInt(child.style[orderGroup]) - 1;
                    child.style[orderGroup] = displayOrder <= 0 ? length : displayOrder;
                } else {
                    displayOrder = parseInt(child.style[orderGroup]) + 1;
                    child.style[orderGroup] = displayOrder > length ? displayOrder % length : displayOrder;
                }
            }
        }
    };

    function setInitDisplayOrder() {
        var length = $("#tbncontainer").children().length;
        var displayOrder = 0;
        var navIndex = 0;
        var orderGroup = Modernizr.prefixed('order');

        while (displayOrder < length) {
            var child = $("#tbncontainer").children().eq(navIndex)[0];
            if (child && child.style) {
                displayOrder++;
                child.style[orderGroup] = displayOrder;
            }
            navIndex++;
        };
    }

    $("#container").hover(function () {
        $(this).css('cursor', 'pointer');
        clearInterval(timer);
        },
        function () {
            $(this).css('cursor', 'auto');
            timer = setInterval(showNextSlide, 5000);
    });

    (function () {
       setInitDisplayOrder();
       timer = setInterval( showNextSlide, 5000 );
    })();
});