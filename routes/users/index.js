'use strict'

const fastify = require("fastify")

/**
 * Router for users endpoint
 * @param {Object} fastify
 * @return {Object} users
 */
const { getUsersHandler, getUsersRouteOptions } = require('../../handlers/users')
async function usersRouter(fastify, opts) {
    console.log('UsersRouter ...')
    // Alarmas
    fastify.get('/', getUsersRouteOptions, getUsersHandler)


}
module.exports = usersRouter
