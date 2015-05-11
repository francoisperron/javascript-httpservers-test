(function () {
    "use strict";

    var fs = require("fs");
    var path = require('path');

    var StaticFileEndpoint = function (filepath) {
        this.content = fs.readFileSync(filepath);
        this.contentType = contentTypesOf(path.extname(filepath));
    };
    module.exports = StaticFileEndpoint;

    StaticFileEndpoint.prototype.handle = function (response) {
        response.setHeader("content-type", this.contentType);
        response.write(this.content);
    };


    function contentTypesOf(extname) {
        var contentType = {
            ".css": "text/css",
            ".ico": "image/x-icon"
        };
        return contentType[extname];
    }

}());
