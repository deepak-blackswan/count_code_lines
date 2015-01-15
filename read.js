var sloc  = require('sloc');
var fs    = require('fs');							// get filesystem module

function Read(){}

Read.prototype.readfile = function() {

	// Read lines now
	fs.readFile("sample.java", "utf8", function(err, code){

		if(err){ 
		  	return err; 
		}
		else{

		    var stats = sloc(code,"java");
		  				
			for(i in sloc.keys){
				
				var k 	= sloc.keys[i];
				result += k + " : " + stats[k] + "\n";
				
		    }
		    console.log(result);
		    
		}

	});	
}
module.exports = Read;