var repeat = function(string,number){
	var finalString = "";
	for(var i = 0; i < number; i++){
		finalString += string;
	}
	return finalString;
};

var join = function(a,y)
{
	var finalstrings = ""
	for(var i=0; i<a.length; i++) {
		if(y==null){
		finalstrings +=a[i];}
		else {
		if(i<(a.length-1)){finalstrings= finalstrings+a[i]+y}
		else {finalstrings+=a[i]}
		}
	}
	
	return finalstrings
	}

var sum = function(inputArray){
    var pendse = 0; 
   
		for(var c = 0; c <inputArray.length; c++) {
   
			pendse= pendse + inputArray[c];
		}
		return pendse;
		
}; 

var paramify = function(object){
	var keysArray = Object.keys(object).sort();
	var finalStringArray =[];

for(var i=0; i < keysArray.length; i++){
	finalStringArray.push(keysArray[i] + "=" + object[keysArray[i]]);
}
return join(finalStringArray, '&')
};

var factorial = function(number){
var placeholder = 1	
	for(var x= number; x>0; x--){
		placeholder = placeholder * x
	}
	return placeholder;
}

var concat_string = function(a,b,c,d,e){
	return [a,b,c,d,e].join("");
}
