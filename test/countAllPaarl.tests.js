
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");
describe ("countAllPaarl function", function(){
    it("returns the number of registration numbers that only belong to paarl", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    });
    it("returns the number of registration numbers that only belong to paarl", function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'))
    });
    it("returns 0 when there is no paarl registration number", function(){
        assert.equal(0, countAllPaarl('CA 345 123, CK 345, CA 123'))
    })
})
