'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: 'plno-logger/file'
})
const logger = pino(transport)

logger.info('Hello')

process.exit(0)
