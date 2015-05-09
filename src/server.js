(function () {
    "use strict";

    var http = require("http");

    var Server = function () {
        this.server = http.createServer(function(request, response){
            response.write("hello");
            response.end();
        });
    };
    module.exports = Server;

    Server.prototype.start = function() {
        this.server.listen(5000);
    };

    Server.prototype.stop = function() {
        this.server.close();
    };
}());
