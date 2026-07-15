import pino from '../../../plno-logger'

const transport = pino.transport({
  target: 'plno-logger/file'
})
const logger = pino(transport)

logger.info('Hello')

process.exit(0)
