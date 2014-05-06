// JavaScript source code
$(document).ready(function () {
    //drag and drop a file to dropbox
    var dropbox = document.getElementById("dropbox");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", dropfiles, false);

    document.getElementById("img1").addEventListener("dragstart", handledragstart, false);
    document.getElementById("img2").addEventListener("dragstart", handledragstart, false);

    function handledragstart(e){  
        e.dataTransfer.setData("text", this.id);
    }

    function dragenter(e) {
       preventBubble(e);
    }

    function dragover(e) {
        preventBubble(e);
    }

    function dropfiles(e) {
       preventBubble(e);

        var dt = e.dataTransfer;//get clipboard
        if(e.dataTransfer.getData("text"))
        {
            //if the file is dragged from this page (assume it is an image)
            var id = e.dataTransfer.getData("text");
            var elm=document.createElement("div");
            elm.appendChild(document.getElementById(id));
            dropbox.appendChild(elm);
        }else{
            //file is dragged from somewhere else
            var filelist = dt.files;//get files
            handleFiles(filelist);
        }        

        function handleFiles(filelist) {
            var imageType=/image.*/;

            for(var i=0; i<filelist.length; i++){
                var file = filelist[i];
                var elm = document.createElement("div");
                if(!file.type.match(imageType)){
                    var aSpan = document.createElement("span");
                    aSpan.innerHTML = file.name;
                    $(elm).append(aSpan);
                }else{
                    var img = document.createElement("img");
                    img.src = window.URL.createObjectURL(file);
                    img.height = 50;
                    img.onload = function(e){
                        window.URL.revokeObjectURL(this.src);
                    }
                    elm.appendChild(img);
                }   
                $("#dropbox").append(elm);          
            }
        }
    }

    function preventBubble(e){
        e.stopPropagation();
        e.preventDefault();
    }
       
    //webworker
    var worker = new Worker("script/workerTest.js");
    // add eventlistener on client side
    worker.addEventListener('message', function (e) {
        $("#workerResponse").html(e.data);
    });

    $("#sayHi").on('click', function () {
        worker.postMessage({ 'cmd': 'start', 'msg': 'Hi' });
    });

    $("#endWorker").on('click', function () {
        worker.postMessage({ 'cmd': 'stop', 'msg': 'Bye' });
        $("#workerResponse").html("Worker is Dead!");
    });

    $('#foolyou').on('click', function () {
        worker.postMessage({ 'cmd': 'ifoolu', 'msg': '???' });
    });
});


