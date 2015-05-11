(function () {
    "use strict";

    var TextEndpoint = require("./endpoints/text-endpoint");
    var StaticFileEndpoint= require("./endpoints/static-file-endpoint");

    module.exports = {
        "/": new TextEndpoint(""),
        "/hello": new TextEndpoint("hello"),
        "/bye": new TextEndpoint("bye"),
        "/favicon.ico": new StaticFileEndpoint("./src/assets/favicon.ico"),
        "/any.css": new StaticFileEndpoint("./src/assets/any.css")
    };

}());
