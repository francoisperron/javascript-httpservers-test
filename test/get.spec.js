(function () {
    "use strict";

    var assert = require("assert");
    var request = require("request");
    var Server = require("../src/server");
    var server;

    before(function () {
        server = new Server();
        server.start();
    });

    after(function () {
        server.stop();
    });

    describe('The http server', function () {
        it('should return 200', function (done) {
            request("http://localhost:5000", function (error, response, body) {
                assert.equal(response.statusCode, 200);
                done();
            })
        })
    })
}());
