const AutoLoad = require('@fastify/autoload')
const path = require('path')

module.exports = async function (fastify, opts) {

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
      dir: path.join(__dirname, 'routes'),
      options: Object.assign({}, opts)
  })


}


