//Hecho por Joaquín Salazar Vega developer
//Sistema de API REST desarrollado en node.js 

Información de la BD:
    La creación de la BD según las instrucciones del ejercicio era volcar un archivo json y pasarlo a mariaDB,MySQL
    o PostgreSQL, yo elegí MariaDB.
    Para el volcado del BD dentro de este proyecto vienen 2 archivos SQL:
    
    -Inventario.sql
    -Procedimientos.sql

    Inventario, tiene el script nesesario para crear la BD dentro de su equipo, solo tiene que ejecutar el codigo dentro de ese archivo.

    Procedimiento, tiene el código nesesario para crear los procedimientos almacenados en la base de datos, por favor ejecute también ese script, de lo contrario el proyecto no funcionará.


Información del proyecto de Node.JS:
    El sistema está hecho para ser ejecutado con node.JS por tanto asegurese de tener la ultima versión de npm
    instalado en el sistema. Es posible que nesesite ejecutar desde una terminal los siguientes comandos:

    1.- npm i nodemon
    2.- npm i express
    3.- npm i morgan
    4.- npm i mysql

    Para correr la aplicación, desde la terminal, aseguresé estar dentro del ámbito del proyecto,
    y ejecute el siguiente script:

    npm start 
    o en su defecto
    node /src/index.js  

Instruciones Generales del proyecto:
    1 Ejecute dentro de la terminal en el ambito del proyecto el escript  de inicio npm start.
    2 Al ejecutarse, la terminal se queda esuchando a la aplicación del node.JS por tanto 
    a partir de ese momento toda la salida u entrada de datos y consultas se podra ver desde la misma.
    3 Al comenzar la aplicacion en la terminal podra ver el puerto en el que esta corriendo la app por default es el 3000.
    4 Desde su navegador o aplicacions de POSTMAN usted puede hacer peticiones HTTP al puerto solicitado.

Información Adicional:
    El proyecto responde a cualquier consulta lanzada a la dirección solicitada, podra ver los estados o códigos de error lanzados en el terminal.
    El proyecto responde a las solicitudes marcadas en el ejercio dado: Get/Post/Put/Patch/delete.
    Se adjuntan la colección de datos de POSTMAN con todos sus endpoints, usted puede modificarlos a su antojo y ver como responde ante cada solicitud.

    Estoy a sus ordenes cualquier duda u aclaración puede enviarme un correo a joaquin.vega93@hotmail.com








