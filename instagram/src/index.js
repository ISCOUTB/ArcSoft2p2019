const express = require('express');
const morgan = require ('morgan');
const engine = require('ejs-mate')
const path = require('path');
const app = express();
const session = require('cookie-session');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//settingsd
//motor de plantillas
app.set('port',process.env.PORT || 8000)
//escuche en el puerto 8000
app.engine('ejs',engine)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))//unir directorios


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//middlewares (funciones que se ejecutan antes de enviar datos a nuestra ruta)
//morgan: Cada vez que hace un usuario que peticion nos está pidiendo y como responde el servidor
app.use(morgan('dev'));
app.use(session({
    secret:"mysecretword",
    signed: true
}));

//Aplicando un middleware para la conversion de la fecha (date)
app.use((req,res,next)=>{

    res.locals.formatDate = (date) =>{
        let myDate= new Date(date*1000);
        return myDate.toLocaleString();
    };
    next();
});

//routes
/*Aplicacion utiliza el archivo de rutas de aqui'*/
app.use(require('./routes/index'));

//static files

//starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});

//conexion a la base de datos


