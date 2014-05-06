self.addEventListener('message', function (e) {
    //postMessage("Hello! You clicked the button " + e.data.val +" time(s)");
    var data = e.data;
    switch (data.cmd) {
        case 'start':
            self.postMessage("Worker says: I start working! and I hear you said " + data.msg);
            break;
        case 'stop':
            self.postMessage('Worker says: I stop because you said ' + data.msg);
            self.close();
            break;
        default:
            self.postMessage("Worker says: I don't understand " + data.msg);
            break;
    }
}); 