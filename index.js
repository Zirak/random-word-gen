/* jslint node:true */
var http = require( 'http' ),
	url  = require( 'url' ),
	rand = require( './randWord.js' );

var template = '<cb>({word:"<word>"});';

var server = http.createServer( serverCb ),
	port = process.env.PORT || 5000;

server.listen( port, console.log.bind(console, 'Listening on ' + port) );

function serverCb ( req, resp ) {
	var query = url.parse( req.url, true ).query;

	var replyObj = {
		cb   : query.callback || query.jsonp,
		word : rand.word( query.length )
	};

	respondWith( resp, supplant(template, replyObj) );
}

function respondWith ( resp, result ) {
	resp.writeHeader(
		200,
		{ 'Content-Type' : 'application/javascript' } );

	resp.write( result );
	resp.end();
}

function supplant ( template, obj ) {
	return template.replace( /<([^>]+)>/g, replace );

	function replace ( $0, $1 ) {
		return obj.hasOwnProperty( $1 ) ?
			obj[ $1 ] :
			$0;
	}
}
