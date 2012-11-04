http://sleepy-bastion-8674.herokuapp.com/

Random word generator REST API blah blah blah crap crap crap. Made for JSONP, accepts a `callback` or `jsonp` parameter. I dare you to see what happens if you provide both.

Examples:

    $ curl 'http://sleepy-bastion-8674.herokuapp.com/?jsonp=console.log'
	console.log({word:"personnel"});

    $ curl 'http://sleepy-bastion-8674.herokuapp.com/?callback=foobar'
    foobar({word:"today"});
