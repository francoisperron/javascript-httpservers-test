(function () {
    "use strict";

    var home = require("../endpoints/home-endpoint");
    var Greetings = require("../endpoints/greetings-endpoint");
    var hello = new Greetings("hello");
    var bye = new Greetings("bye");

    var routes = {
        "/": home,
        "/hello": hello,
        "/bye": bye
    };

    exports.handle = function (request, response) {
        if (routes[request.url] != undefined) {
            routes[request.url].handle(response);
        }
        response.end();
    };

}());
