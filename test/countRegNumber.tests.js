let assert = require("assert");
let countRegNumber = require("../countRegNumber");
describe("the countRegNumber function", function(){
        it("returns the number of registration numbers in the string with '3'", function(){
            assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))
        });
        it("returns the number of registration numbers in the string with '2'", function(){
            assert.equal(2, countRegNumber('CY 523519,CJ 812328'))
        })
        it("returns the number of registration numbers in the string with '5'", function(){
            assert.equal(5, countRegNumber('CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328'))
        })
        it("returns the number of registration numbers in the string with '0'", function(){
            assert.equal(1, countRegNumber("CY 523519"))
        })

})