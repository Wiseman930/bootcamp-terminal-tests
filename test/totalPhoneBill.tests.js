let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe ("totalPhoneBill function", function(){
    it("returns the total amount R0.00 when there are no call or sms made", function(){
        assert.equal("R0.00", totalPhoneBill(''))
    });
    it("returns the total amount R1.95 when there are 3 sms made", function(){
        assert.equal("R1.95", totalPhoneBill('sms,sms,sms'))
    });

    it("returns the total amount R11.00 when there are 4 calls made", function(){
        assert.equal("R11.00", totalPhoneBill('call,call,call,call'))
    });
    it("returns the total amount R12.30 when there are 4 calls and 2 sms made", function(){
        assert.equal("R12.30", totalPhoneBill('call,call,call,call,sms,sms'))
    });
})
