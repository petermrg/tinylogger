/*
Copyright 2013 Peter Morgan <petermrg@ymail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

GLOBAL.LOG_ALL   = 0xFF;
GLOBAL.LOG_NONE  = 0x00;
GLOBAL.LOG_TRACE = 0x01;
GLOBAL.LOG_DEBUG = 0x02;
GLOBAL.LOG_INFO  = 0x04;
GLOBAL.LOG_WARN  = 0x08;
GLOBAL.LOG_ALERT = 0x10;
GLOBAL.LOG_ERROR = 0x20;
GLOBAL.LOG_PANIC = 0x40;
GLOBAL.LOG_TEXT  = 0x80;

GLOBAL.LOG_TODO  = GLOBAL.LOG_DEBUG;
GLOBAL.LOG_OK    = GLOBAL.LOG_INFO;
GLOBAL.LOG_SQL   = GLOBAL.LOG_TRACE;

var options = {
    level: LOG_ALL,
    colors: true,
    time: true,
    levels: [
        { name: 'text' , pre: ''     , bit: LOG_TRACE, color: ''       , extra: '' },
        { name: 'sql'  , pre: '  SQL', bit: LOG_TODO , color: 'magenta', extra: '' },
        { name: 'todo' , pre: ' TODO', bit: LOG_TODO , color: 'magenta', extra: 'bold' },
        { name: 'ok'   , pre: '   OK', bit: LOG_TODO , color: 'green'  , extra: 'bold' },
        { name: 'trace', pre: 'TRACE', bit: LOG_TRACE, color: 'grey'   , extra: '' },
        { name: 'debug', pre: 'DEBUG', bit: LOG_DEBUG, color: 'cyan'   , extra: '' },
        { name: 'info' , pre: ' INFO', bit: LOG_INFO , color: 'green'  , extra: '' },
        { name: 'warn' , pre: ' WARN', bit: LOG_WARN , color: 'yellow' , extra: '' },
        { name: 'alert', pre: 'ALERT', bit: LOG_WARN , color: 'red'    , extra: '' },
        { name: 'error', pre: 'ERROR', bit: LOG_ERROR, color: 'red'    , extra: 'bold' },
        { name: 'panic', pre: 'PANIC', bit: LOG_PANIC, color: 'red'    , extra: 'bold' },
    ],
}

if (options.colors) {
    var colors = require('colors');
}

if (options.time) {
    var zf = function(s, n) { // zero fill
        s = s.toString(10);
        n = n||2;
        while (s.length < n) s = '0'+s;
        return s;
    }
}

exports.options = options;

var applyOptions = function(){
    options.levels.forEach(function(level){
        var pre = '';
        var time = '';
        if (level.pre != '') {
            pre = level.pre;
            if (options.colors) {
                if (level.color != '') { pre = pre[level.color]; }
                if (level.extra != '') { pre = pre[level.extra]; }
            }
            pre+= ' ';
        }
        exports[level.name] = function(str) {
            if (options.time) {
                var t = new Date();
                time = '['+zf(t.getHours())+':'+zf(t.getMinutes())+':'+zf(t.getSeconds())+'] ';
            }
            console.log(pre+time+str);
        }
    });
};
applyOptions();
exports.applyOptions = applyOptions;
