#tinylogger.js

A very simple node module for console logging.

##Usage:

```javascript
var log = require('tinylogger');

log.error('Something wrong'); // displays an error message
log.info('This is a message'); // info messages
log.debug('Counter value is: '+i); // debug messages

log.options.level = LOG_ALL; // display all messages
log.options.level = LOG_NONE; // disable logging
log.options.level = LOG_DEBUG; // display only debug messages
log.options.level = LOG_DEBUG+LOG_ERROR; // display debug and error messages
```

##Default message types:

trace, debug, info, warn, alert, error, panic, text, todo, ok, sql

##Customize:

You can add new message types or modify the existing ones, just look at `options.levels` array.


