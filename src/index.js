// Generated project cognito
require('dotenv').config();
const log4js = require('@nelreina/node-log4js');
    
const argv = require('minimist')(process.argv.slice(2));
const logger = log4js('cognito');
const DEBUG = process.env['DEBUG'];

logger.info(`Start Project cognito: ${JSON.stringify({DEBUG, argv})}  `)
