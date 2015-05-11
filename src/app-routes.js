(function () {
    "use strict";

    var TextEndpoint = require("./endpoints/text-endpoint");

    var home = new TextEndpoint("");
    var hello = new TextEndpoint("hello");
    var bye = new TextEndpoint("bye");

    var Favicon = require("./endpoints/favicon-endpoint");
    var favicon = new Favicon();

    exports.routes = {
        "/": home,
        "/hello": hello,
        "/bye": bye,
        "/favicon.ico": favicon
    };

}());
