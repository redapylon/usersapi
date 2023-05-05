## Fastify API - Lista de usuarios

Este servidor ha sido creado con Fastify, un framework web para Node.js que está diseñado para ser rápido y escalable.

La aplicación utiliza la función getUsers() para devolver una lista de usuarios en formato JSON cuando se accede a la ruta /usuarios. Esta función utiliza la función readFile() de Node.js para leer el contenido del archivo usuarios.json, que contiene la lista de usuarios.

La aplicación también utiliza el plugin fastify-cors para permitir solicitudes CORS desde cualquier origen.
