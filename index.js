/** JS script for the workflow **/
var uncss = require('uncss');

var files   = ['http://www.dereksalmon.me/'],
    options = {
        ignore       : ['fonts-loaded', 'fonts-loaded h1'], /* @TODO fix problem to ignore class */
        csspath      : 'dist/public/css/',
        timeout      : 1000,
				stylesheets  : ['dist/public/css/bundle.min.css'],
        htmlroot     : 'dist/public/',
        report       : false,
    };

uncss(files, options, function (error, output) {
    console.log(output);
});

/* Look Ma, no options! */
uncss(files, function (error, output) {
    console.log(output);
});
