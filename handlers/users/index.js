// handlers/users.js

//Explicacion de los handlers
// Handlers
// Los handlers son funciones que se encargan de manejar las peticiones HTTP que llegan a la API.
//En este caso, el handler getUsersHandler se encarga de manejar las peticiones GET que llegan a la ruta /usuarios.
//Para ello, obtiene la lista de usuarios a través del servicio getUsers y la envía como respuesta de la API.

'use strict'


const getUsersRouteOptions = {
  schema: {
      description: 'Get users',
      summary: 'Get users',
      tags: ['Users'],
      // response: {} // TODO: añadir
  }
}


async function getUsersHandler(request, reply) {
  // Obtiene los usuarios a través del servicio
  console.log('getUsersHandler ...');
  const users = await getUsers();

  // Envía los usuarios como respuesta de la API

  return reply.status(200).send( users );
}
const { getUsers }= require('../../services/users');



module.exports = { getUsersHandler , getUsersRouteOptions};

