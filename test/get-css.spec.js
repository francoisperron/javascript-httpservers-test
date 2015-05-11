(function () {
    "use strict";

    var assert = require("assert");
    var request = require("request");
    var app = require("../src/app");

    describe("Get on /any.css", function () {

        before(function () {
            app.start(5000)
        });

        after(function () {
            app.stop();
        });

        it("should return 200", function (done) {
            request("http://localhost:5000/any.css", function (error, response, body) {
                assert.equal(response.statusCode, 200);
                done(error);
            })
        });

        it("should return text/css", function (done) {
            request("http://localhost:5000/any.css", function (error, response, body) {
                assert.equal(response.headers["content-type"], "text/css");
                done(error);
            })
        });

        it("should return the css", function (done) {
            request("http://localhost:5000/any.css", function (error, response, body) {
                var favicon = require("fs").readFileSync("./src/assets/any.css");
                assert.equal(response.body, favicon);
                done(error);
            })
        });
    })

}());
