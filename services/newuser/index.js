'use strict';
const fs = require('fs').promises;

// Function to add new user from JSON file and return the new user list
async function newUsers(newUser) {
  console.log('Loading new user list...');
  const data = await fs.readFile('./data/usuarios.json', 'utf8');
  console.log('data:', data);
  const users = data ? JSON.parse(data).usuarios : [];
  console.log('users:', users);
  const updatedUsers = [...users, newUser];
  console.log('new users:', updatedUsers);
  
  // Write updated user list back to file
  await fs.writeFile('./data/usuarios.json', JSON.stringify({ usuarios: updatedUsers }, null, 2));
  
  // Return updated user list
  console.log('')
  return ('New User List'+JSON.stringify(updatedUsers));
  
}

module.exports = { newUsers };
