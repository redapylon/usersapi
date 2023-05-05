// index.js
'use strict'
const fs = require('fs').promises;

//Print dir file content

//Get users async functions for dirfile content display

async function newUsers() {

  console.log('newUsers ...');
  const data = await fs.readFile('./data/usuarios.json', 'utf8');
  const users = JSON.parse(data);
//Add new user named Jorge with id 4 mail jorge@jorge.com and surname Gonzalez 
    users.push({id:4, nombre:'Jorge', apellido:'Gonzalez', email:'jorge@example.com'});



}

module.exports = { newUsers };
