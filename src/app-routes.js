(function () {
    "use strict";

    var TextEndpoint = require("./endpoints/text-endpoint");

    var home = new TextEndpoint("");
    var hello = new TextEndpoint("hello");
    var bye = new TextEndpoint("bye");

    exports.routes = {
        "/": home,
        "/hello": hello,
        "/bye": bye
    };

}());
