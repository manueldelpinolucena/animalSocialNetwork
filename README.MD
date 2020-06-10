# Red Social

## Arquitectura

La idea inicial es crear una plataforma que no dependa de los frameworks que se están usando.
Esta independencia permite reutilizar la lógica de negocio si se decide cambiar tecnología.
En cuanto a la organización de directorios he seguido la convención de mantener cada módulo en su propio directorio.
Cada módulo consta de un controllador para manejar las peticiones de la API con express, una capa de dominio en la cual
se desarrolla la lógica de negocio, manteniéndose esta independiente del controlador y de la base de datos.
Por último una capa de servicio, donde este gestiona las peticiones a la base de datos mysql.

## Guía de uso

1. Desplegar la base de datos y el servidor:
   ```
   docker-compose up -d
   ```
2. Ejecutar las semillas que están en el directorio:

   - dbrootuser: root
   - dbrootpassword: example
   - host: 127.0.0.1
   - dbport: 3306

   ```
   /mysql/seeds.sql
   ```

## API

Todas las queries se pueden probar importando los archivos de la carpeta postman.
Base url http://localhost:3000/api

1. Crear un usuario.

   ```
   [POST] http://localhost:3000/api/user
   ```

   Ejemplo de usuario:

   ```json
   {
     "username": "manueldelpino",
     "email": "manueldelpinolucena@gmail.com",
     "password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
     "latitude": 40.5045248,
     "longitude": -3.6700160000000004,
     "language": "EN"
   }
   ```

2. Obtener un usuario a partir de su id.

   ```
   [GET] http://localhost:3000/api/user/:id
   ```

3. Actualizar un usuario a partir de su id.
   ```
   [PATCH] http://localhost:3000/api/user/:id
   ```
   Se puede modificar el email, latitud, longitud y lenguage del usuario. Ej:
   ```json
   {
     "email": "manuel@gmail.com",
     "latitude": 40.5045248,
     "longitude": -3.6700160000000004,
     "language": "EN"
   }
   ```
4. Borrar un usuario a partir de su id.

   ```
   [DELETE] http://localhost:3000/api/user/:id
   ```

5. Obtener listado de amigos de un usuario a partir de su id.
   ```
   [GET] http://localhost:3000/api/user/:id/friends/list
   ```
6. Obtener numero total de amigos de un usuario a partir de su id.
   ```
   [GET] http://localhost:3000/api/user/:id/friends/count
   ```
