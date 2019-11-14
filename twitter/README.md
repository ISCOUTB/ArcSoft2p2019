## Tweepy
Tweepy es un paquete de Python de código abierto que le brinda una forma muy conveniente de acceder a la API de Twitter con Python. Tweepy incluye un conjunto de clases y métodos que representan los modelos de la API de Twitter, y maneja de manera transparente varios detalles de implementación.

Para instalar Tweepy utilizamos el siguiente comando:

```
pip3 install tweepy
```

## Crear credenciales de autenticación
La API de Twitter requiere que todas las solicitudes usen OAuth para autenticarse, por lo tanto, se deben crear las credenciales de autenticación necesarias para poder utilizar la API.

Si ya contamos con una cuenta de Twitter vamos al sitio de [desarrolladores de Twitter](https://developer.twitter.com/) y seguimos todos los pasos para obtener nuestra cuenta de desarrollador.

<img src="https://i.ibb.co/1XrhkZH/twitterdev.png">

Ya que Twitter otorga credenciales de autenticación a aplicaciones, no a cuentas, debemos registrar la aplicación para poder realizar llamadas a la API. Para registrar la aplicación, vamos al sitio de [aplicaciones de Twitter](https://developer.twitter.com/en/apps) y seleccionamos la opción Crear una aplicación.

Seguimos los pasos y una vez creada la aplicación vamos a detalles para poder generar las credenciales.

<img src="https://i.ibb.co/0m7BJdY/Captura-de-Pantalla-2019-10-09-a-la-s-5-49-17-p-m.png">

En la pestaña Keys and tokens generamos las credenciales que necesitamos:

* Consumer key
* Consumer secret
* Access token
* Access secret

<img src="https://i.ibb.co/0Msw8xh/Captura-de-Pantalla-2019-10-09-a-la-s-5-52-30-p-m.png">
