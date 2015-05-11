(function () {
    "use strict";

    var assert = require("assert");
    var request = require("request");
    var app = require("../src/app");

    describe("Get on text endpoints", function () {

        before(function () {
            app.start(5000)
        });

        after(function () {
            app.stop();
        });

        it("should return 200", function (done) {
            request("http://localhost:5000", function (error, response, body) {
                assert.equal(response.statusCode, 200);
                done(error);
            })
        });

        it("should return text/plain", function (done) {
            request("http://localhost:5000", function (error, response, body) {
                assert.equal(response.headers["content-type"], "text/plain");
                done(error);
            })
        });

        it("should return hello on /hello", function(done) {
            request("http://localhost:5000/hello", function (error, response, body){
                assert.equal(body, "hello");
                done(error);
            })
        });

        it("should return bye on /bye", function(done) {
            request("http://localhost:5000/bye", function (error, response, body){
                assert.equal(body, "bye");
                done(error);
            })
        });
    })
}());
