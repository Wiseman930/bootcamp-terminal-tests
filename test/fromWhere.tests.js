let assert = require("assert");
let fromWhere = require("../fromWhere");
describe ("fromWhere function", function(){
    it("returns the place or town where a registration number is from", function(){
        assert.equal('Bellville', fromWhere('CY 832716'))
    });
    it("returns the place or town where a registration number is from", function(){
        assert.equal('Paarl', fromWhere('CJ 874324'))
    });
    it("returns the place or town where a registration number is from", function(){
        assert.equal('Cape Town', fromWhere('CA 868424'))
    })
    it("returns 'Some other place!' if the registration number is not from Bellvile, Cape Town and Paarl ", function(){
        assert.equal('Some other place!', fromWhere('CC 576849'))
    })
})