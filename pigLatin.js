var translate = function(word){
var s;
var arr = ["a","e","i","o","u"];
var pigLatin = "ay";
var wordarr;
var result;
var bfrvowel;
    if (word.indexOf(" ")== -1){
      s = [];
      for(var i = 0; i<word.length; i++){
       for (var x = 0; x<arr.length; x++){     
         if(arr[x]==word[i]){
           if(word.search("qu")>=0){
            qu = word.search("qu")
            bfrvowel = word.slice(0,qu+2)
            s= word.substring(word.search("qu")+2) + bfrvowel + pigLatin; 
            return s; 
           }
           else{ 
             bfrvowel = word.slice(0,i);
             s = word.substring(i) + bfrvowel + pigLatin;
             return s;
           } 
         }
       }
      }
    } 
    else{
      s = [];
      wordarr = word.split(" "); 
        for (t in wordarr){
          var wordstr = wordarr[t].toString(); 
              for(var z = 0; z<wordstr.length; z++){ 
                  for (var n = 0; n<arr.length; n++){ 
                      if(wordstr[z] == arr[n]){  
                        if(wordstr.search("qu")>=0){ 
                          qu = wordstr.search("qu") 
                          bfrvowel = wordstr.slice(0,qu+2);
                          result = wordstr.substring(wordstr.search("qu")+2) + bfrvowel + pigLatin + " ";
                          s = s + result;
                        }
                        else{
                          bfrvowel = wordstr.slice(0,z);
                          result = wordstr.substring(z) + bfrvowel + pigLatin + " ";
                          s = s + result;
                        }
                      }
                  }   
                }          
          }
      return s;
    }
}; 