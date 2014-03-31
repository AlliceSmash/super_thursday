$(window).load(function () {
        loadImg();
    var frybio;
    var loadedFile;

    if (Modernizr.localstorage) {
        frybio = JSON.parse(localStorage.getItem("fryBio"));
        loadedFile = localStorage.getItem("storedFile");
    }

    if (null == frybio) {
        frybio = {};
        frybio.Name = "Fry";
        frybio.DOB = "August 9, 1974";
        frybio.workplace = "Planet Express";
        frybio.Trivia = "Fry can not swim";
        if(Modernizr.localstorage) localStorage.setItem("fryBio", JSON.stringify(frybio));
    }

    $("#getFryBio").click(function () {
        $('#getFryBio').html("Hide Fry's Bio!");
        if ($("#showFryBio").is(":hidden")) {
            $("#showFryBio").slideDown("slow", function () {
                $(this).html(frybio.Name + " was born on " + frybio.DOB + ". He works for " + frybio.workplace + "."
                    + "<br/> Do you know that " + frybio.Trivia + "?");
            });
        } else {
            $('#getFryBio').html("Show Fry's Bio!");
            $("#showFryBio").slideUp("slow",function(){}); 
        }
    }); 

    $("#getFile").click(function () {
        $("#getFile").html("Hide the surprise");
        if ($("#showFile").is(":hidden")) {
            $('#showFile').slideDown("slow", function () {
                if (Modernizr.localstorage) {
                    loadedFile =  localStorage.getItem("storedFile");
                    $(this).html(loadedFile);
                } else {
                    $(this).html("Can't display the surprise. Please update your browser.");
                }
            });
        } else {
            $("#getFile").html("Click me for a surprise!");
            $("#showFile").slideUp("slow", function(){});
        }
    })

    $("#whatever").click(function () {
        $("#fryTag").toggle("slow", function () { });
    });

    function loadImg() {
        if (Modernizr.localstorage) {
            console.log('Hello');
            var fryLasertag = document.getElementById("fryTag");
            var storedImg = JSON.parse(localStorage.getItem("storedImg")) || {};

            if (null == localStorage.getItem("storedImg")) {
                    var myCanvas = document.createElement("canvas");
                    var canvasContext = myCanvas.getContext("2d");
                    myCanvas.width = fryLasertag.width;
                    myCanvas.height = fryLasertag.height;

                    canvasContext.drawImage(fryLasertag, 0, 0, fryLasertag.width, fryLasertag.height);
                    storedImg.frytag = myCanvas.toDataURL("image/png");
                    try{
                        localStorage["storedImg"] = JSON.stringify(storedImg);
                    } catch (e) {
                        console.log("storage failed to save FryLaserTag" + e);
                    }
                fryLasertag.src = "img/FryLaserTag.png";

            } else {
                //if there is an image saved, load from localStorage
                fryLasertag.setAttribute('src', storedImg.frytag);
            }
        }
    }

$.ajax({
            type: "GET",
            url: "img/lorem.txt",
            dataType: "text",
            async: false,
            success: function (data) {
                if(Modernizr.localstorage) localStorage["storedFile"] = data;
            },
            error: function(error,txtStatus) {
                console.log(txtStatus);
                console.log('error');
            }
        });
});