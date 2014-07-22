var Calculator = function(){

	var calculator = {};
	var total = 0;
	calculator.value = function(){
		return total
	};

	calculator.add = function(num){
		return total += num;
	};

	calculator.subtract = function(num){
		return total -= num;
	};

	return calculator;
}