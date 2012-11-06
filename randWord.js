var fs = require( 'fs' );

var path = exports.words_path = './words.txt',
	ready, words, len;

function opened ( err, data ) {
	if ( err ) {
		throw err;
	}

	/*gulp*/
	words = data.split( '\n' );
	len = words.length;
	ready = true;
}

var loadWords = exports.load = function () {
	ready = false;
	words = [];
	len   = null;

	fs.readFile( path, 'ascii', opened );
};

exports.word = function () {
	if ( !ready ) {
		return null;
	}
	return words[ Math.floor(Math.random() * len) ];
};

loadWords();
