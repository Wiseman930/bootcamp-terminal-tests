let assert = require("assert");
let transportFee = require("../transportFee");


describe ("transportFee function", function(){
    it("returns R20 for the morning transport fee", function(){
        assert.equal("R20", transportFee('morning'))
    });
    it("returns R10 for the afternoon transport fee", function(){
        assert.equal("R10",transportFee('afternoon'))
    });

    it("returns free for the nightshift transport fee", function(){
        assert.equal("free", transportFee('nightshift'))
    });

})