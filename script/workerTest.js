onmessage = function(e) {
   postMessage("Hello! You clicked the button " + e.data.val +" time(s)");
}