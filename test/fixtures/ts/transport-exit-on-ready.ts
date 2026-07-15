import pino from '../../../pinox'

const transport = pino.transport({
  target: 'pinox/file'
})
const logger = pino(transport)

transport.on('ready', function () {
  logger.info('Hello')
  process.exit(0)
})
