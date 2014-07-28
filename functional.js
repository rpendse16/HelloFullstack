function reduce(array, start, func){
    var current = null;
    for(var i=start; i<array.length; i++){
        current = func(current, array[i]);
    }
    return current;
}

var countWordsInReduce = function(){
    var newString = this.join(" ");
    return newString.split(" ").length;
}

function sum(array){
    return reduce(array, 0, function(a, b) {return a+b});
}

function makeAdder(adder){ 
  return function(secondAdder){
    if(secondAdder == null){
      return adder + 2;
    } else {
      return adder + secondAdder;
    }
  }
}

function any(array, func){
  if(func === undefined){
    func = function isTrue(array){
      for(var j=0; j<array.length; j++){
        if(array[j]){
          return true;
        }
      }
    }
  }
  for(var i=0; i<array.length; i++){
    if(func(array[i])){
      return true;
    }
  }
  return false;
}

var addOne = function (num) {console.log(num+1);};
var numbers = [21, 29, 25, 34];

forEach(numbers, addOne);

var once = function (func) {
	var ran = false;
	return function () {
		if (!ran) {func();}
		ran = true;
	};
};