(function () {
    "use strict";

    var app = require("./app");

    var args = process.argv.slice(2);
    var port = args[0] || 5000;

    app.start(port);
    console.log("app running on port " + port);

}());
