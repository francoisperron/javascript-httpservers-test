(function () {
    "use strict";

    exports.handleHello = function (response) {
        response.write("hello");
    };

    exports.handleBye = function (response) {
        response.write("bye");
    };

    exports.handleHome = function (response) {
        response.write("");
    };

}());
