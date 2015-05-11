(function () {
    "use strict";

    var Server = require("./http/server");
    var router = require("./http/router");
    var appRoutes = require("./app-routes");
    var server;

    exports.start = function (port) {
        router.routing(appRoutes);
        server = new Server(port, router);
        server.start();
    };

    exports.stop = function () {
        server.stop();
    };

}());
