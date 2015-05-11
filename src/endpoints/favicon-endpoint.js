(function () {
    "use strict";

    var FaviconEndpoint = function () {

    };
    module.exports = FaviconEndpoint;

    FaviconEndpoint.prototype.handle = function (response) {
        response.setHeader("content-type", "image/x-icon");
        var favicon = require("fs").readFileSync("./src/assets/favicon.ico");
        response.write(favicon);
    };

}());
