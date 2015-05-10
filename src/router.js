(function () {
    "use strict";

    var handleHello = function (response) {
        response.write("hello");
    };

    var handleBye = function (response) {
        response.write("bye");
    };

    var handleHome = function (response) {
        response.write("");
    };

    var routes = {
        "/": handleHome,
        "/hello": handleHello,
        "/bye": handleBye
    };

    exports.handle = function (request, response) {
        routes[request.url](response);
        response.end();
    };

}());
