
var winston = require('winston');
require('winston-papertrail').Papertrail;
var winstonPapertrail = new winston.transports.Papertrail({
    host: 'logs6.papertrailapp.com',
    port: 23114 
})

winstonPapertrail.on('error', function (err) {
});

var logger = new winston.Logger({
    transports: [winstonPapertrail]
});

module.exports = logger;