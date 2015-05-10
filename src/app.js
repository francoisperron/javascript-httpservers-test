(function () {
    "use strict";

    var Server = require("../src/server");
    var router = require("../src/router");
    var server;

    exports.start = function () {
        server = new Server(router);
        server.start();
    };

    exports.stop = function () {
        server.stop();
    }

}());
