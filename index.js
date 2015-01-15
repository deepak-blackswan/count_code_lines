var fs    	= require('fs');							// get filesystem module
var sloc  	= require('sloc');
var http 	= require("http");							// get the HTTP server module
var express = require("express");						// get express for added functionality
var app		= express();								// initialise express

// get our configuration variable
var config 		= JSON.parse(fs.readFileSync("./config.json"));
var host 		= config.host;
var port		= config.port; 

function read(){
	fs.readFile("sample.java", "utf8", function(err, code){

	  if(err){ console.error(err); }
	  else{
	    var stats = sloc(code,"java");
	    for(i in sloc.keys){
	      var k = sloc.keys[i];
	      console.log(k + " : " + stats[k]);
	    }
	  }
	});	
}

app.get('/', function(req, res){
	
	console.log("Starting");
	read();
	res.set('Content-Type', 'text/plain');
	res.status(200).send();
	res.end();

}); 
http.createServer(app).listen(port);