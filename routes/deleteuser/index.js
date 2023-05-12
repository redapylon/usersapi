'use strict'

const fastify = require("fastify")

/**
 * Router for users endpoint
 * @param {Object} fastify
 * @return {Object} users
 */
const { delUsersHandler, delUsersRouteOptions } = require('../../handlers/deleteuser')
async function usersRouter(fastify, opts) {
    console.log('UsersRouter ...')
    // Alarmas
  // POST route for the /deleteuser endpoint
  fastify.post('/', delUsersRouteOptions, delUsersHandler)

}
module.exports = usersRouter