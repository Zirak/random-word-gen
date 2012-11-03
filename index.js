var http = require( 'http' ),
	url  = require( 'url' ),
	rand = require( './randWord.js' );

var template = '<cb>({word:"<word>"});';

http.createServer( serverCb ).listen( 8080 );

function serverCb ( req, resp ) {
	var query = url.parse( req.url, true ).query;

	var replyObj = {
		cb   : query.callback || query.jsonp,
		word : rand.word()
	};

	resp.writeHeader(
		200,
		{ 'Content-Type' : 'application/javascript' } );

	resp.write( supplant(template, replyObj) );
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
