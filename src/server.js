(function () {
    "use strict";

    var httpServer = require("http-server");


    var Server = function () {
        this.server = httpServer.createServer();
    };
    module.exports = Server;

    Server.prototype.start = function() {
        this.server.listen(5000);
    };

    Server.prototype.stop = function() {
        this.server.close();
    };
}());
