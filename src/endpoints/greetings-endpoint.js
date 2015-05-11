(function () {
    "use strict";

    var GreetingEndpoint = function (greetings) {
        this.greetings = greetings;
    };
    module.exports = GreetingEndpoint;

    GreetingEndpoint.prototype.handle = function (response) {
        response.write(this.greetings);
    };

}());
