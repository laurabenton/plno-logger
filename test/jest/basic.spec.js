/* global test */
const pino = require('../../plno-logger')

test('transport should work in jest', function () {
  pino({
    transport: {
      target: 'pino-pretty'
    }
  })
})
