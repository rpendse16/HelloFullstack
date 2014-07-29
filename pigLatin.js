function translate(wordString){

// creates a string of all of our possible vowels
var vowel = 'aeiou';

//
var wordArr = wordString.split(' ');
var wordArray = [];
var index = 0;
    wordArr.forEach(function(word){
    for(var i =0; i< word.length; i++){
        if(vowel.search(word.charAt(i)) !=-1){
            if(word.charAt(i) != 'u' || (word.charAt(i) === 'u' && word.charAt(i - 1) != 'q')){
                index = i;
                break;
            }
        }
    }
    wordArray.push(word.substring(index, word.length) + word.substring(0, index) + 'ay');
  });
  return wordArray.join(' ');
}