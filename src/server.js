(function () {
    "use strict";

    var http = require("http");

    var Server = function (router) {
        this.server = http.createServer(router.handle);
    };
    module.exports = Server;

    Server.prototype.start = function () {
        this.server.listen(5000);
    };

    Server.prototype.stop = function () {
        this.server.close();
    };
}());
