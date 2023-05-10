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
    body: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        nombre: { type: 'string' },
        apellido: { type: 'string' },
        email: { type: 'string' }
      },
      required: ['id', 'nombre', 'apellido', 'email']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          newUsers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                nombre: { type: 'string' },
                apellido: { type: 'string' },
                email: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }
};


const newUsersHandler = async (req, res, next) => {
  try {
    console.log('newUsersHandler ...');
    const {id, nombre, apellido, email} = req.body;

    if (!id) {
      throw new Error('campo ID invalido ');
    }
    if (!nombre) {
      throw new Error('campo nombre invalido ');
    }
    if (!apellido) {
      throw new Error('campo apellido invalido ');
    }
    if (!email) {
      throw new Error('campo mail invalido ');
    }

    const newUser = { id, nombre, apellido, email };
    const updatedUsers = await newUsers(newUser);
    res.status(200).send(updatedUsers);
  } catch (err) {
    console.error(err);

    if (err.message.startsWith('campo ')) {
      res.status(400).send({ error: 'Bad Request', message: err.message });
    } else {
      res.status(500).send({ error: 'Internal Server Error', message: err.message });
    }
  }
};



const { newUsers }= require('../../services/newuser');



module.exports = { newUsersHandler , newUsersRouteOptions};

