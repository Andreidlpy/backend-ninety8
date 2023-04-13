const express = require('express');
const cors = require('cors')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const { Router } = require('express')
const router = Router();


const options = {
    host: 'containers-us-west-15.railway.app',
    port: 5518,
    user: 'root',
    password: 'y1Jws3UyKz0wPB72f2Cj',
    database: 'railway',
}

const sessionStore = new MySQLStore( options )

const sess = {
    key: 'session_user',
    secret: 'keyboard cat',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {}
}

class Server {
    constructor(){
        this.app =  express() ;
        this.port = process.env.PORT || 8080;
        this.usuariosPath = '/api/usuarios'

        //Middleware
        this.middlewares();
        //Rutas
        this.routes();
    }
    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());


        //Express session
        if( this.app.get('env') === 'production' ){
            this.app.set('trust proxy', 1) // trust first proxy
            sess.cookie.secure = true // serve secure cookies
        }
        this.app.use(session(sess))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
        this.app.use('/.netlify/functions/api', router)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Sevidor corriendo en:', this.port)
        } )
    }
}

module.exports = Server