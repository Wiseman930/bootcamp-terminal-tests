
let assert = require("assert");
let greet = require("../greet");
describe("the greet fuction", function(){

    it("should greet Arnold with 'Hello, Arnold'", function(){
        assert.equal('Hello, Arnold', greet("Arnold"))

    });
    it("should greet Wiseman with 'Hello, Wiseman'", function(){
        assert.equal('Hello, Wiseman', greet("Wiseman"))

    })
    it("should greet Johannes with 'Hello, Johannes'", function(){
        assert.equal('Hello, Johannes', greet("Johannes"))

    })
    it("should greet Linda with 'Hello, Linda'", function(){
        assert.equal('Hello, Linda', greet("Linda"))

    })

})