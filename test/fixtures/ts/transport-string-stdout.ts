import pino from '../../../pinox'

const transport = pino.transport({
  target: 'pinox/file',
  options: { destination: '1' }
})
const logger = pino(transport)
logger.info('Hello')
