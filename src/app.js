(function () {
    "use strict";

    var Server = require("./server");
    var router = require("./router");
    var server;

    exports.start = function (port) {
        server = new Server(port, router);
        server.start();
    };

    exports.stop = function () {
        server.stop();
    };

}());
