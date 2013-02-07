var log = require('./tinylogger.js');

log.error('Connection failed!');
log.debug('Value is: 42');
log.info('Program init');
log.sql("SELECT * FROM users WHERE name = 'peter'");
log.warn('Colors are going to be disabled');

log.options.colors = false;
log.applyOptions();

log.error('Connection failed!');
log.debug('Value is: 42');
log.info('Program init');
log.sql("SELECT * FROM users WHERE name = 'peter'");

log.options.colors = true;
log.applyOptions();

log.panic('COLORS ARE ON!!!');
log.error('Connection failed!');
log.debug('Value is: 42');
log.info('Program init');
log.sql("SELECT * FROM users WHERE name = 'peter'");

