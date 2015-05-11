(function () {
    "use strict";

    var Greetings = require("../endpoints/greetings-endpoint");
    var home = new Greetings("");
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
