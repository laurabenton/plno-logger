/* eslint-disable no-eval */

eval(`
const pino = require('../../../')

const logger = pino(
  pino.transport({
    target: 'pinox/file'
  })
)

logger.info('done!')
`)
