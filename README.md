#tinylogger.js

A very simple node module for console logging with colors.

##Install:

```bash
npm install tinylogger
```

##Usage:

```javascript
var log = require('tinylogger');

log.error('Something wrong'); // displays an error message
log.info('This is a message'); // info message
log.debug('I am here!'); // debug message

log.options.level = LOG_ALL; // display all messages
log.options.level = LOG_NONE; // disable logging
log.options.level = LOG_DEBUG; // display only debug messages
log.options.level = LOG_DEBUG+LOG_ERROR; // display debug and error messages
```

##Default message types:

trace, debug, info, warn, alert, error, panic, text, todo, ok, sql

##Requires:

###Colors:
```bash
npm install colors
```
Or you can disable colors:

```javascript
log.options.colors = false;
log.applyOptions();
```

##Customize:

You can add new message types or modify the existing ones, just look at `options.levels` array.


