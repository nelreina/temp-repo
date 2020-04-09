// Generated project cognito
require('dotenv').config();
const log4js = require('@nelreina/node-log4js');
const http = require('http');
const express = require('@nelreina/node-express');
const argv = require('minimist')(process.argv.slice(2));

const logger = log4js('cognito');
const DEBUG = process.env['DEBUG'];

const PORT = process.env['PORT'] || 8080;

const app = express();

app.get('/', (_, res) => {
  res.send({ message: 'Hey I am here' })
})

app.post('/', (req, res) => {
  try {
    const data = req.body;
    logger.debug(JSON.stringify(data));
    res.send(data)

  } catch (error) {
    logger.error(error.message);
    res.status(503).send(error.message)
  }
})

const server = http.createServer(app);
server.listen(PORT, () => logger.info(`API is running on port ${PORT}`));

logger.info(`Start Project cognito: ${JSON.stringify({ DEBUG, argv })}  `)
