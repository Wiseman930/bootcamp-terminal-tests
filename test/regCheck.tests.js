let assert = require("assert");
let regCheck = require("../regCheck");

describe ("the regCheck function", function(){
    it("should return true if a registration number taken in is from Gauteng", function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it("should return true if a registration number taken in is from Limpopo", function(){
        assert.equal(true, regCheck('DC 55 YU L', 'L'));
    });
    it("should true if a registration number taken in is from Mpumalanga", function(){
        assert.equal(true, regCheck('DC 55 YU MP', 'MP'));
    });
    it("should false if a registration number taken in is not from Gauteng,Eastern Cape,Limpopo or Mpumalanga", function(){
        assert.equal(false, regCheck('CJ 123 908', 'CJ'));
    });
})
