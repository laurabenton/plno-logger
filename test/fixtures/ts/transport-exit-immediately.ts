import pino from '../../../pinox'

const transport = pino.transport({
  target: 'pinox/file'
})
const logger = pino(transport)

logger.info('Hello')

process.exit(0)
