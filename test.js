var log = require('./tinylogger.js');
log.options.colors = false;
log.error('Connection failed!')
log.debug('Value is: 42');
log.info('Program init');
log.sql("SELECT * FROM users WHERE name = 'peter'");
log.text('plain text');
