
let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");
describe ("findItemsOver20 function", function(){
    it("returns products with a quantity above 20", function(){


        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},]))
    });
    it("returns products with a quantity above 20", function(){

    var results2 = [];
        assert.deepEqual(results2, findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},]))
    });
    it("returns products with a quantity above 20", function(){


        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        var itemList = results3;
        assert.deepEqual(results3, findItemsOver20([
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}]))
    });

})