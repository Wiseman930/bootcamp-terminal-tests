
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe ("countAllFromTown function", function(){
    it("returns the number of registration numbers that only match the first code 'CL' with '3' ", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    });
    it("returns the number of registration numbers that only match the first code 'CF' with '2' ", function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'))
    });
    it("returns the number of registration numbers that only match the first code 'CA' with '2' ", function(){
        assert.equal(2, countAllFromTown('CA 345 123, CK 345, CA 123', 'CA'))
    })
})