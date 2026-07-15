'use strict'

import pino from '../../plno-logger.js' 
import { join } from 'node:path'

const log = pino({
  transport: {
    target: join(import.meta.dirname, 'to-file-transport.js'),
    options: { destination: process.argv[2] }
  }
})

export { log }
