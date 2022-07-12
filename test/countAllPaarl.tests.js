
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");
describe ("countAllPaarl function", function(){
    it("returns the number registration numbers that only belong to paarl with '3' ", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    });
    it("returns the number registration numbers that only belong to paarl with '2' ", function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'))
    });
    it("returns the number registration numbers that only belong to paarl with '0' ", function(){
        assert.equal(0, countAllPaarl('CA 345 123, CK 345, CA 123'))
    })
})