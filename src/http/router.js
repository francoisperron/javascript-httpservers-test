(function () {
    "use strict";

    var routes = {};

    exports.routing = function (someRoutes) {
        routes = someRoutes;
    };

    exports.handle = function (request, response) {
        routes[request.url] != undefined ? routes[request.url].handle(response) : response.writeHead(404);
        response.end();
    };

}());
