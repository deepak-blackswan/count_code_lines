var app 		= require('./'),
	should 		= require('should'),
	supertest 	= require('supertest')
;

describe('count_code_lines', function(){

	it('should return 200', 
	function(app) {
		supertest(app)
		.get('/')
		.expect('Content-Type', 'text/plain')
		.expect(200)
		.end(function (err) {
			if (err) return done(err);
			done();
		});
		
	});

});