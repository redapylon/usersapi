// index.js
'use strict'
const fs = require('fs').promises;

//Print dir file content

//Get users async functions for dirfile content display

async function getUsers() {

  console.log('getUsers ...');
  const data = await fs.readFile('./data/usuarios.json', 'utf8');
  const users = JSON.parse(data);

  return users;

}

module.exports = { getUsers };
