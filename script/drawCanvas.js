// JavaScript source code
$(document).ready(function () {

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

    (function drawArc() {
        var canvas1 = document.getElementById("arc");
        var ctx = canvas1.getContext('2d');
        ctx.beginPath();
        ctx.arc(50, 50, 20, Math.PI, 1.5 * Math.PI, false);
        ctx.lineTo(150, 30);
        ctx.arc(150, 50, 20, 1.5 * Math.PI, 0, false);
        ctx.lineTo(170, 80);
        ctx.arc(150, 80, 20, 0, 0.5 * Math.PI, false);
        ctx.lineTo(75, 100);
        ctx.quadraticCurveTo(65, 120, 50, 120);
        ctx.quadraticCurveTo(65, 115, 62.5, 100);
        ctx.lineTo(50, 100);
        ctx.arc(50, 80, 20, Math.PI * 0.5, Math.PI, false);
        ctx.lineTo(30, 50);
        ctx.stroke();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.font = "2em Arial";
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.fillStyle = "#a10909";
        ctx.fillText("Hello!", 50, 75);
    })();
    
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
});