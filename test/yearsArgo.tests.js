let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe ("the yearsAgo function", function(){
    it("should return the number years between the current year and 1976 with '46'", function(){
        assert.equal(46, yearsAgo(1976));
    })
    it("should return the number years between the current year and 1976 with '22'", function(){
        assert.equal(22, yearsAgo(2000));
    })
    it("should return the number years between the current year and 1997 with '25'", function(){
        assert.equal(25, yearsAgo(1997));
    })
})