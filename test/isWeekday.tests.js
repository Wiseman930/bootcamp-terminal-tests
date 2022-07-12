let assert = require("assert");
let isWeekday = require("../isWeekday");
describe ("the isWeekday function", function(){
    it("should return a bolean if a Friday is in the days of the week with 'true'", function(){
        assert.equal(true, isWeekday('Friday'));
    })
    it("should return a bolean if a Thursday is in the days of the week with 'true'", function(){
        assert.equal(true, isWeekday('Thursday'));
    })
    it("should return a bolean if Saturday is not in the days of the week with 'false'", function(){
        assert.equal(false, isWeekday('Saturday'));
    })
    it("should return a bolean if Sunday is not in the days of the week with 'false'", function(){
        assert.equal(false, isWeekday('Sunday'));
    })
})