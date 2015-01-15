var fs    		= require('fs');							// get filesystem module
var ReadCode 	= require("./read.js")							// read function
var http 		= require("http");							// get the HTTP server module
var express 	= require("express");						// get express for added functionality
var app			= express();								// initialise express

// get our configuration variable
var config 		= JSON.parse(fs.readFileSync("./config.json"));
var host 		= config.host;
var port		= config.port; 




app.get('/', function(req, res){

	// create a new instance of the read "class"
	var read = new ReadCode();

	// call readfile as an instance method
	read.readfile();
	
	res.set('Content-Type', 'text/plain');
	res.status(200).send( );
	res.end();		
	
}); 

http.createServer(app).listen(port);

