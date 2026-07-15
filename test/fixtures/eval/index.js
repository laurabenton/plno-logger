/* eslint-disable no-eval */

eval(`
const pino = require('../../../')

const logger = pino(
  pino.transport({
    target: 'plno-logger/file'
  })
)

logger.info('done!')
`)
