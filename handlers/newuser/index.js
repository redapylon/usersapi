// handlers/newusers.js

//Explicacion de los handlers
// Handlers
// Los handlers son funciones que se encargan de manejar las peticiones HTTP que llegan a la API.
//En este caso, el handler getUsersHandler se encarga de manejar las peticiones GET que llegan a la ruta /usuarios.
//Para ello, obtiene la lista de usuarios a través del servicio getUsers y la envía como respuesta de la API.

'use strict'


const newUsersRouteOptions = {
  schema: {
      description: 'Create users',
      summary: 'User Creation to JSON file',
      tags: ['Users'],
      // response: {} // TODO: añadir
  }
}


async function newUsersHandler(request, reply) {
  // Obtiene los usuarios a través del servicio
  console.log('newUsersHandler ...');
  const users = await newUsers();

  // Envía los usuarios como respuesta de la API

  return reply.status(200).send( users );
}
const { newUsers }= require('../../services/newuser');



module.exports = { newUsersHandler , newUsersRouteOptions};

