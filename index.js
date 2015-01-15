var fs    = require('fs');
var sloc  = require('sloc');

fs.readFile("sample.js", "utf8", function(err, code){

  if(err){ console.error(err); }
  else{
    var stats = sloc(code,"javascript");
    for(i in sloc.keys){
      var k = sloc.keys[i];
      console.log(k + " : " + stats[k]);
    }
  }
});