import pino from '../../../plno-logger'

const transport = pino.transport({
  target: 'plno-logger/file'
})
const logger = pino(transport)

transport.on('ready', function () {
  logger.info('Hello')
  process.exit(0)
})
