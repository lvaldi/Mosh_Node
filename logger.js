(function (exports, require, module, __filename, __dirname) {

    console.log
    var url = 'http://mylogger.io/log';

    function log(message) {
        // Send a HTTP request
        console.log(message);
    }

    module.exports = log;
    module.exports.endpoint = url;
    exports.log = log;
})
