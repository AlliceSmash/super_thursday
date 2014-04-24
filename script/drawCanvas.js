// JavaScript source code
$(document).ready(function () {
    $("#locationButton").click(function () {
        getCurrentLoc();
        $("#locationButton").prop("disabled", "disabled");
    });

    function getCurrentLoc() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayMap);
        } else {
            $("#geoloc").append("<p>your browser does not support Geolocation</p>");
        }
    };

    function displayMap(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var location = new google.maps.LatLng(latitude,longitude);
        var myOptions = {
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("showMap"), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: location,
            title: "Here you are!"
        });
        marker.setMap(map);
        map.setCenter(location);

        $("#showLatLong").append("<span> Latitude: " + latitude + "; Longitude: " + longitude + "</span>");
    };

    (function drawRect() {
        var canvas1 = document.getElementById("rectangle");
        var ctx = canvas1.getContext('2d');
        ctx.fillStyle = 'rgb(169, 169, 169)';
        ctx.fillRect(15, 15, 100, 100);
        ctx.clearRect(30, 30, 70, 70);
        ctx.strokeStyle = 'rgb(148, 0, 211)';
        ctx.strokeRect(45, 45, 40, 40);
        ctx.fillStyle = 'rgba(0, 206, 209, 0.5)';
        ctx.fillRect(60, 60, 100, 150);
    })();

    (function drawArrow() {
        var canvas1 = document.getElementById("arrow");
        var ctx = canvas1.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.lineTo(100, 50);
        ctx.lineTo(100, 150);
        ctx.lineTo(50, 100);
        ctx.lineWidth = 3 ;
        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.stroke();
        ctx.fill();
    })();

    function drawArc(startX, startY, radius1, straightlength, straightheight) {
        var canvas1 = document.getElementById("arc");
        var ctx = canvas1.getContext('2d');
        ctx.beginPath();
        ctx.arc(startX, startY, radius1, Math.PI, 1.5 * Math.PI, false);
        ctx.lineTo(startX + straightlength, startY - radius1);
        ctx.arc(startX + straightlength, startY, radius1, 1.5 * Math.PI, 0, false);
        ctx.lineTo(straightlength + radius1+startX, straightheight + startY);
        ctx.arc(startX+straightlength, startY + straightheight, radius1, 0, 0.5 * Math.PI, false);
        ctx.lineTo(startX/2 + straightlength/2, startY + straightheight + radius1);
        ctx.quadraticCurveTo(startX + radius1 * 0.75, startY + 2 * radius1 + straightheight, startX, startY + 2 * radius1 + straightheight);
        ctx.quadraticCurveTo(startX + radius1 * 0.75, startY + 1.5 * radius1 + straightheight, startX + 0.5*radius1, startY + radius1 + straightheight);
        ctx.lineTo(startX, startY + radius1 + straightheight);
        ctx.arc(startX, startY + straightheight, radius1, Math.PI * 0.5, Math.PI, false);
        ctx.lineTo(startX - radius1, startY);
        ctx.stroke();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.font = "2em Arial";
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.fillStyle = "#a10909";
        ctx.fillText("Hello!", startX, startY+radius1);
    };

    (function drawImg() {
        var ctx = document.getElementById("image").getContext('2d');
        var img = new Image();
        img.onload = function () {
           for (var i = 0; i < 3; i++)
                for (var j = i; j<2; j++)
                    ctx.drawImage(img, 75*i , j*85 );
        }
        img.src = "img/futurama-fry-tiny.png";

    })();

    drawArc(50, 50,20, 100, 30);
});