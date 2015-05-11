(function () {
    "use strict";

    var TextEndpoint = function (text) {
        this.text = text;
    };
    module.exports = TextEndpoint;

    TextEndpoint.prototype.handle = function (response) {
        response.setHeader("Content-Type", "text/plain");
        response.write(this.text);
    };

}());
