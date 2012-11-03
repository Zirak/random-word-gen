var fs = require( 'fs' );

var path = exports.words_path = './words.txt',
	ready = false,
	words = [], len; /*gulp*/

fs.readFile( path, 'ascii', opened );

function opened ( err, data ) {
	if ( err ) {
		throw err;
	}

	words = data.split( '\n' );
	len = words.length;
	ready = true;
}

exports.word = function () {
	if ( !ready ) {
		return null;
	}
	return words[ Math.floor(Math.random() * len) ];
};
