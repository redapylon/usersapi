// handlers/delusers/index.js



'use strict'


const delUsersRouteOptions = {
  schema: {
    description: 'Create users',
    summary: 'User Creation to JSON file',
    tags: ['Users'],
    body: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
      required: ['id']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          delUsers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
              }
            }
          }
        }
      }
    }
  }
};


const delUsersHandler = async (req, res, next) => {
  try {
    console.log('delUsersHandler ...');
    const {id} = req.body;

    if (!id) {
      throw new Error('campo id invalido ');
    }


    const delUser = { id };
    const updatedUsers = await delUsers(delUser);
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



const { delUsers }= require('../../services/deleteuser');



module.exports = { delUsersHandler , delUsersRouteOptions};

