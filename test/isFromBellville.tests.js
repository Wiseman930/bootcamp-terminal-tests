
let assert = require("assert");
let isFromBellville = require("../isFromBellville");
describe ("the isFromBellville function", function(){
    it("should return a bolean if a registration Number is from Bellville with 'true'", function(){
        assert.equal(true, isFromBellville('CY 123'));
    })
    it("should return a bolean if a registration Number is from Bellville with 'true'", function(){
        assert.equal(true, isFromBellville('CY 456'));
    })
    it("should return a bolean if a registration Number is not from Bellville with 'false'", function(){
        assert.equal(false, isFromBellville('CJ 123'));
    })
    it("should return a bolean if a registration Number is not from Bellville with 'false'", function(){
        assert.equal(false, isFromBellville('NN 1230'));
    })
})