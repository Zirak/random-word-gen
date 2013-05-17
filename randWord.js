var path = exports.words_path = './outwords.json',
	words, keys,
	minLength = 3, maxLength;

var loadWords = exports.load = function () {
	len   = null;

	words = require(exports.words_path);

	keys = Object.keys(words);
	len = keys.length;
	maxLength = Math.max.apply(Math, keys);
};
loadWords();

exports.word = function ( length ) {
	if (!length) {
		length = keys[ Math.floor(Math.random() * len) ];
	}
	else {
		length = Math.min( maxLength, Math.max(minLength, length) );
	}

	var correspond = words[ length ],
		ret = correspond[ Math.floor(Math.random() * correspond.length) ];

	correspond = null;
	return ret;
};
