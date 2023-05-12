'use strict';
const { promises: fs } = require('fs');

async function delUsers(userToDelete) {
    console.log('userToDelete:', userToDelete);
    console.log('Loading user list...');
    const data = await fs.readFile('./data/usuarios.json', 'utf8');
    console.log('data:', data);
    const users = data ? JSON.parse(data).usuarios : [];
    console.log('users:', users);
    
    // Filter out the user with the matching id
    const updatedUsers = users.filter(user => parseInt(user.id) !== parseInt(userToDelete.id));
    
    console.log('updated users:', updatedUsers);
    
    // Write updated user list back to file
    await fs.writeFile('./data/usuarios.json', JSON.stringify({ usuarios: updatedUsers }, null, 2));
    
    // Return updated user list
    console.log('')
    return ('Updated User List: ' + JSON.stringify(updatedUsers));
}

module.exports = { delUsers };
