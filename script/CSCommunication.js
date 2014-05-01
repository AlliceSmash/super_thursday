// JavaScript source code
$(document).ready(function () {
    var wsUri = "ws://echo.websocket.org/";
    $("#wsButton").click(function () {
        testWebSocket();
    });

    function testWebSocket() {
        websocket = new WebSocket(wsUri);
        websocket.onopen = function (evt) { onOpen(evt) };
        websocket.onclose = function (evt) { onClose(evt) };
        websocket.onmessage = function (evt) { onMessage(evt) };
        websocket.onerror = function (evt) { onError(evt) };
    }

    function onOpen(evt) {
        writeToScreen("CONNECTED");
        doSend("Hello Websocket!");
    }

    function onClose(evt) {
        writeToScreen("DISCONNECTED");
    }

    function onMessage(evt) {
        writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
        websocket.close();
    }

    function onError(evt) {
        writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

    function doSend(message) {
        writeToScreen("SENT: " + message);
        websocket.send(message);
    }

    function writeToScreen(message) {
        var pre = document.createElement("p");
        $(pre).html(message);
        $("#socketOutput").append(pre);
    }

    //AJAX part
    $.ajaxSetup({ cache: false });
    $("#ajaxButton").click(function () {

    });

    //drag and drop a file
    var dropbox = document.getElementById("dropbox");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", dropfiles, false);

    function dragenter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dragover(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dropfiles(e) {
        e.stopPropagation();
        e.preventDefault();

        var dt = e.dataTransfer;//get clipboard
        var filelist = dt.files;//get files
        handleFiles(filelist);

        function handleFiles(filelist) {
            for(var i=0; i<filelist.length; i++){
                var elm=document.createElement("div");
                $("#dropbox").append(elm);
                $(elm).html(filelist[i].name);
            }
        }
    }
    //draggable element


    //webworker
    var worker = new Worker("script/workerTest.js");
    var counter = 0;
    worker.onmessage = function (e) {
        $("#workerResponse").html(e.data);
    }

    $("#startWorker").on('click', function () {
         counter++;
        worker.postMessage({val: counter});
    });

    $("#endWorker").on('click', function () {
        counter = 0;
        worker.terminate();
        $("#workerResponse").html("Worker is Dead!");
    });
});