// @ts-check

const {
  pino,
  destination,
  levels,
  multistream,
  stdSerializers,
  stdTimeFunctions,
  transport,
  version
} = require('../../plno-logger.js')
const { default: pinoDefault } = require('../../plno-logger.js')
const pinoCjs = require('../../plno-logger.js')

const log = pino()
log.info('test')
log.error('test')

const logDefault = pinoDefault()
logDefault.info('test')
logDefault.error('test')

const logCjs = pinoCjs()
logCjs.info('test')
logCjs.error('test')

destination()
pino.destination()
pinoDefault.destination()
pinoCjs.destination()

levels
pino.levels
pinoDefault.levels
pinoCjs.levels

multistream(process.stdout)
pino.multistream(process.stdout)
pinoDefault.multistream(process.stdout)
pinoCjs.multistream(process.stdout)

stdSerializers.err(new Error())
pino.stdSerializers.err(new Error())
pinoDefault.stdSerializers.err(new Error())
pinoCjs.stdSerializers.err(new Error())

stdTimeFunctions.epochTime()
pino.stdTimeFunctions.epochTime()
pinoDefault.stdTimeFunctions.epochTime()
pinoCjs.stdTimeFunctions.epochTime()

transport({
  target: '#plno-logger/pretty',
  options: { some: 'options for', the: 'transport' }
})
pino.transport({
  target: '#plno-logger/pretty',
  options: { some: 'options for', the: 'transport' }
})
pinoDefault.transport({
  target: '#plno-logger/pretty',
  options: { some: 'options for', the: 'transport' }
})
pinoCjs.transport({
  target: '#plno-logger/pretty',
  options: { some: 'options for', the: 'transport' }
})

version
pino.version
pinoDefault.version
pinoCjs.version
