let assert = require("assert");
let isWeekday = require("../isWeekday");
describe ("the isWeekday function", function(){
    it("should return true if the day of the week is Friday", function(){
        assert.equal(true, isWeekday('Friday'));
    })
    it("should return true if the day of the week is Thursday", function(){
        assert.equal(true, isWeekday('Thursday'));
    })
    it("should return false if the day of the week is Saturday", function(){
        assert.equal(false, isWeekday('Saturday'));
    })
    it("should return false if the day of the week is Sunday", function(){
        assert.equal(false, isWeekday('Sunday'));
    })
})
