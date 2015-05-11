(function () {
    "use strict";

    var assert = require("assert");
    var request = require("request");
    var app = require("../src/app");

    describe("Get on /favicon.ico", function () {

        before(function () {
            app.start(5000)
        });

        after(function () {
            app.stop();
        });

        it("should return 200", function (done) {
            request("http://localhost:5000/favicon.ico", function (error, response, body) {
                assert.equal(response.statusCode, 200);
                done(error);
            })
        });

        it("should return image/x-icon", function (done) {
            request("http://localhost:5000/favicon.ico", function (error, response, body) {
                assert.equal(response.headers["content-type"], "image/x-icon");
                done(error);
            })
        });

        it("should return the ico", function (done) {
            request("http://localhost:5000/favicon.ico", function (error, response, body) {
                var favicon = require("fs").readFileSync("./src/assets/favicon.ico");
                assert.equal(response.body, favicon);
                done(error);
            })
        });
    })

}());
