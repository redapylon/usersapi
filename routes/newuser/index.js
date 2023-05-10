'use strict'

const fastify = require("fastify")

/**
 * Router for users endpoint
 * @param {Object} fastify
 * @return {Object} users
 */
const { newUsersHandler, newUsersRouteOptions } = require('../../handlers/newuser')
async function usersRouter(fastify, opts) {
    console.log('UsersRouter ...')
    // Alarmas
  // POST route for the /newuser endpoint
  fastify.post('/', newUsersRouteOptions, newUsersHandler)

}
module.exports = usersRouter