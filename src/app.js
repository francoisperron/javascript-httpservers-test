(function () {
    "use strict";

    var Server = require("./http/server");
    var router = require("./http/router");
    var server;

    exports.start = function (port) {
        server = new Server(port, router);
        server.start();
    };

    exports.stop = function () {
        server.stop();
    };

}());
