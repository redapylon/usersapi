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
//
//
//  app.post('/nuevo_usuario', (req, res) => {
//    // Leer el archivo JSON
//    fs.readFile('./usuarios.json', (err, data) => {
//      if (err) {
//        throw err;
//      }
//  
//      // Parsear el contenido del archivo JSON
//      const usuarios = JSON.parse(data);
//  
//      // Agregar el nuevo usuario
//      usuarios.push(req.body);
//  
//      // Guardar el archivo JSON
//      fs.writeFile('./usuarios.json', JSON.stringify(usuarios), (err) => {
//        if (err) {
//          throw err;
//        }
//  
//        // Enviar la lista de usuarios como respuesta
//        res.send(usuarios);
//      });
//    });
//  });
//