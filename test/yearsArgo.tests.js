let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe ("the yearsAgo function", function(){
    it("should return the number years between the current year and 1976", function(){
        assert.equal(46, yearsAgo(1976));
    })
    it("should return the number years between the current year and 1976", function(){
        assert.equal(22, yearsAgo(2000));
    })
    it("should return the number years between the current year and 1997", function(){
        assert.equal(25, yearsAgo(1997));
    })
})
