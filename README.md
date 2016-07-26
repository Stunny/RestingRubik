# RestingRubik API
RESTful API for puzzle _develovers_
### Presentación
RestingRubik nace con la idea de llegar a organizar una base de datos, consumible desde un servicio web de filosofía [REST](http://bit.ly/1lDZsaI), que almacene todo tipo de información relacionada con la resolución de rompecabezas tipo [Rubik](http://bit.ly/1QQb8Mo), obviando el clásico cubo de Rubik de 3 niveles y queriendo abarcar todas sus variantes y/o modificaciones.
Con esta aplicación web se crea la posibilidad de aplicar la tecnología `RESTful` a cualquier aplicación de cualquier plataforma que necesite consultar la información relacionada a este tipo de rompecabezas.
### Instalación
Para poder utilizar esta aplicación web, el usuario deberá tener instalado [NodeJS](http://bit.ly/1LjG5AH) y el SGBD [MongoDB](http://bit.ly/1NL0pyD) en el servidor que se vaya a utilizar. Además, a continuación se especifican los paquetes necesarios para el correcto funcionamiento del software.
```json
"dependencies" : {
  "express" : "latest",
  "mongoose" : "latest",
  "body-parser":"^1.15.2",
  "method-override":"^2.3.6",
  "errorhandler":"^1.4.3",
  "path":"^0.12.7",
  "jade":"^1.11.0"
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
Lo mismo aplicará al puerto `APP_PORT` que el usuario desee que escuche la aplicación.

### Ejecución y funcionamiento
Una vez terminados los preparativos de la aplicación, para ejecutarla bastará con utilizar el comando `$node server.js` desde la terminal situada en la carpeta raíz. De esta manera la aplicación empezará la escucha al puerto especificado (se recuerda que las aplicaciones desarrolladas con la tecnología NodeJS no se basan en hilos de ejecución sino en eventos disparados por la escucha de peticiones).

- Cuando se lleven a cabo peticiones de tipo `GET`, en caso de ejecución satisfactoria, el unico _output_ que recibirá el usuario será el conjunto de objetos representados en `JSON`, en el cuerpo de la respuesta. En caso contrario, la aplicación entera está protegida contra excepciones, lo cual evitará la detención inmediata de la ejecución.
- Cuando se lleven a cabo peticiones de tipo `POST` y `PUT`, en caso de ejecución satisfactoria de la petición, la respuesta será: el nuevo objeto introducido en caso de `POST` y el objeto con los valores de sus atributos modificados en caso de `PUT`.
- Cuando se lleven a cabo peticiones de tipo `DELETE`, la respuesta, tanto en caso satisfactorio como en erróneo, tendrá el mismo formato. Un objeto _JSON_ con un atributo `"status"` y un atributo `"msg"`, los cuales indicarán el estado de la petición.

### Uso
La aplicación incluye rutas para el consumo de la _API_ desde el navegador. De todas maneras, se recomienda el uso de programas cliente orientados a peticion y respuesta _HTTP_ para las comprobaciones de funcionamiento de todos los _verbos_.
