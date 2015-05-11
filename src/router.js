(function () {
    "use strict";

    var appRoutes = require("./appRoutes");

    var routes = {
        "/": appRoutes.handleHome,
        "/hello": appRoutes.handleHello,
        "/bye": appRoutes.handleBye
    };

    exports.handle = function (request, response) {
        if(routes[request.url] != undefined){
            routes[request.url](response);
        }

       response.end();
    };

}());
