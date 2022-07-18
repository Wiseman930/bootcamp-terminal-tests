
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe ("countAllFromTown function", function(){
    it("returns the number of registration numbers that only belong to Stellenbosch ", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    });
    it("returns the number of registration numbers that only belong to paarl ", function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CJ'))
    });
    it("returns the number of registration numbers that only only belong to cape town ", function(){
        assert.equal(2, countAllFromTown('CA 345 123, CK 345, CA 123', 'CA'))
    })
})
