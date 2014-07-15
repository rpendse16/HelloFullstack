var hello = function(name) { if (name!=null) {return("Hello, "+ name + "!");}
else {return("Hello!");}
};
describe("Hello", function() { 

it("says hello", function() {
expect(hello()).toEqual("Hello!");
});
it("says hello to someone", function() {
expect(hello("Fred")).toEqual("Hello, Fred!");
});
});