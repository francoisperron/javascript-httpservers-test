(function () {
    "use strict";

    var Text = require("../endpoints/text-endpoint");
    var home = new Text("");
    var hello = new Text("hello");
    var bye = new Text("bye");

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
