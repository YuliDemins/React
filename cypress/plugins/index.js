const istanbul = require('istanbul-middleware')
const istanbulConfig = require('../../.nycrc.json')

module.exports = (on, config) => {
  // Istanbul code coverage middleware
  const coverageMiddleware = istanbul.createMiddleware(istanbulConfig)
  on('dev-server:start', options => {
    return new Promise((resolve, reject) => {
      const server = options.app
      server.use(coverageMiddleware)
      resolve()
    })
  })
}