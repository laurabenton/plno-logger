import pino from '../../../plno-logger'

const transport = pino.transport({
  target: 'plno-logger/file',
  options: { destination: '1' }
})
const logger = pino(transport)
logger.info('Hello')
