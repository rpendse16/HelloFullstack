var Calculator = function(){
var stack = [];

this.value = function(){
	return stack[stack.length-1];
};

this.push = function(num){
	stack.push(num);
};

this.plus = function(){
	if(stack.length>1){
	var elem1 = stack.pop();
	var elem2 = stack.pop();
	var sum = elem1 + elem2;
	stack.push(sum);}
	else {
		throw "calculator is empty"
	}
};

this.minus = function(){
	if(stack.length>1){
	var elem2 = stack.pop();
	var elem1 = stack.pop();
	var difference = elem1 - elem2;
	stack.push(difference);}
	else {
		throw "calculator is empty"
	}
};
this.divide = function(){
	if(stack.length>1){
	var elem2 = stack.pop();
	var elem1 = stack.pop();
	var quotient = elem1/elem2;
	stack.push(quotient);}
	else {
		throw "calculator is empty"
	}
};
this.times = function(){
	if(stack.length>1){
	var elem2 = stack.pop();
	var elem1 = stack.pop();
	var product = elem2*elem1
	stack.push(product);}
	else {
		throw "calculator is empty"
	}
};

};