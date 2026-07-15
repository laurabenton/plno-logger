/* global test */
const pino = require('../../pinox')

test('transport should work in jest', function () {
  pino({
    transport: {
      target: 'pino-pretty'
    }
  })
})
