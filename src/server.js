(function () {
    "use strict";

    var http = require("http");

    var Server = function (port, router) {
        this.port = port;
        this.server = http.createServer(router.handle);
    };
    module.exports = Server;

    Server.prototype.start = function () {
        this.server.listen(this.port);
    };

    Server.prototype.stop = function () {
        this.server.close();
    };
}());
