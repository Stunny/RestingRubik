# RestingRubik API
RESTful API for puzzle _develovers_
### Presentación
RestingRubik nace con la idea de llegar a organizar una base de datos, consumible desde un servicio web de filosofía [REST](http://bit.ly/1lDZsaI), que almacene todo tipo de información relacionada con la resolución de rompecabezas tipo [Rubik](http://bit.ly/1QQb8Mo), obviando el clásico cubo de Rubik de 3 niveles y queriendo abarcar todas sus variantes y/o modificaciones.
Con esta aplicación web se crea la posibilidad de aplicar la tecnología `RESTful` a cualquier aplicación de cualquier plataforma que necesite consultar la información relacionada a este tipo de rompecabezas.
### Instalación
Para poder utilizar esta aplicación web, el usuario deberá tener instalado [NodeJS](http://bit.ly/1LjG5AH) y el SGBD [MongoDB](http://bit.ly/1NL0pyD) en el servidor que se vaya a utilizar. Además, a continuación se especifican los paquetes necesarios para el correcto funcionamiento del software.
```json
"dependencies": {
  "body-parser": "^1.15.2",
  "errorhandler": "^1.4.3",
  "express": "latest",
  "jade": "^1.11.0",
  "jsonwebtoken": "^7.1.6",
  "method-override": "^2.3.6",
  "mongoose": "latest",
  "morgan": "^1.7.0",
  "path": "^0.12.7"
}
```
En caso de haber clonado el repositorio directamente **_no hará falta_** instalar por separado los paquetes especificados en las dependencias. En caso contrario, bastará con ejecutar el comando `$npm install <paquete> --save` desde la terminal situada en la carpeta raíz de la aplicación.

### Preparación
La aplicación ha sido desarrollada en un entorno de cliente-servidor separados, por lo que para poder ejecutar correctamente el software, el usuario deberá editar el módulo `constants.js`, situado en la carpeta raíz de la aplicación, cambiando el parámetro `SERVER_ADDRESS`, correspondiente a la dirección IP del servidor desde el que se vaya a ejecutar.
```javascript
module.exports = Object.freeze({
  SERVER_ADDRESS : 'http://192.168.1.100:5000/',
  APP_PORT : 5000
});
```
Lo mismo aplicará al puerto `APP_PORT` que el usuario desee que escuche la aplicación. <br>
Además del módulo de constantes, también se dispone de un módulo de configuración de la aplicación en el que quedan definidos la dirección de conexión a la base de datos, la función de `hash` utilizada para almacenar las contraseñas de los usuarios, ya la clave utilizada para encriptar los `JWT` que fortalecen la seguridad de todo el sistema.
```javascript
module.exports = {
  'secret' : 'cubopezlosabetodo',
  'dataBase'  : 'mongodb://localhost/cube',
  hashCode : function(pssw){    //Funcion de hash para almacenar las contraseñas de los usuarios
    var hash = 0, i, chr, len;
    if (pssw.length === 0) return hash;
    for (i = 0, len = pssw.length; i < len; i++) {
      chr   = pssw.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }
}

```

### Ejecución y funcionamiento
Una vez terminados los preparativos de la aplicación, para ejecutarla bastará con utilizar el comando `$node server.js` desde la terminal situada en la carpeta raíz. De esta manera la aplicación empezará la escucha al puerto especificado (se recuerda que las aplicaciones desarrolladas con la tecnología NodeJS no se basan en hilos de ejecución sino en eventos disparados por la escucha de peticiones).

- Cuando se lleven a cabo peticiones de tipo `GET`, en caso de ejecución satisfactoria, el unico _output_ que recibirá el usuario será el conjunto de objetos representados en `JSON`, en el cuerpo de la respuesta. En caso contrario, la aplicación entera está protegida contra excepciones, lo cual evitará la detención inmediata de la ejecución.
- Cuando se lleven a cabo peticiones de tipo `POST` y `PUT`, en caso de ejecución satisfactoria de la petición, la respuesta será: el nuevo objeto introducido en caso de `POST` y el objeto con los valores de sus atributos modificados en caso de `PUT`.
- Cuando se lleven a cabo peticiones de tipo `DELETE`, la respuesta, tanto en caso satisfactorio como en erróneo, tendrá el mismo formato. Un objeto _JSON_ con un atributo `"status"` y un atributo `"msg"`, los cuales indicarán el estado de la petición.

### Uso
Para empezar a poder utilizar la aplicación, una vez instalada y en ejecución, el usuario deberá registrarse en la base de datos. Una vez hecho el registro, éste deberá acceder a la ruta de autenticación y obtener su `JWT`. A partir de entonces, una vez obtenido su token, podrá operar libremente hasta que éste expire, momento en el que deberá volver a realizar la autenticación. Por defecto, los tokens tienen un tiempo de vida de 24h. Esto puede ser modificado desde el archivo `authController.js`, en la propiedad `expiresIn` de la firma. <br>
En el índice de la aplicación, el usuario podrá encontrar los enlaces a los diferentes formularios de consumición de la API. En cada uno de ellos primero deberá hacerse una petición `GET` para que se configure correctamente la petición que quiera hacerse, ya sea de actualización o de borrado. Esto último no aplica a los formularios de creación. En estos lo único que es estrictamente requerido (como en todas las demás rutas) es el token de acceso. <br>
### Uso desde aplicaciones externas
Si se va a consumir la API desde aplicaciones externas, lo más recomendado es que el token de acceso se envíe como contenido de una cabecera HTTP con el nombre `x-access-token`. Esto facilitará el reconocimeinto del usuario, además de incrementar la seguridad, ya que no se está intruduciendo el token en ningún formulario o dirección URL.
