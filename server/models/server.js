const express = require('express');
const cors = require('cors')
const session = require('express-session');
const { vefiredSession } = require('../middlewares/verifiedSession');
const { db } = require('../db/dbConnection');
// const { db } = require('../db/dbConnection');
const MySQLStore = require('express-mysql-session')(session)

const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password:  process.env.DB_PASS,
    database: process.env.DB_NAME,
}

const sessionStore = new MySQLStore( options )

const sess = {
    key: 'session_user',
    secret: 'keyboard cat',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 120000
    }
}

class Server {
    constructor(){
        this.app =  express() ;
        this.port = process.env.PORT || 8080;
        this.usuariosPath = '/api/usuarios'
        this.sessionPath = '/api/session'
        this.productosPath = '/api/productos'
        this.carritoPath = '/api/carrito'
        this.checkoutPath = '/api/checkout'
        //Middleware
        this.middlewares();
        //Rutas
        this.routes();
        //Coneccion db
        this.dbConnection();
    }
    middlewares(){
        //CORS
        this.app.use(cors({
            credentials: true,
            origin: ['http://localhost:5173']
        }));

        //Lectura y parseo del body
        this.app.use(express.json());

        this.app.use(express.static('dist'))
        //Express session
        if( process.env.NODE_ENV === 'production' ){
            this.app.set('trust proxy', 1) // trust first proxy
            sess.cookie.secure = true // serve secure cookies
        }
        this.app.use(session(sess))
        
    }
     dbConnection(){
        try {
             db.authenticate();
            console.log('Modelos sincronizados correctamente');
        } catch (error) {
            console.error('Error sincronizando modelos:', error);
        }
    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
        this.app.use(this.sessionPath, require('../routes/session'))
        this.app.use(this.productosPath, require('../routes/productos'))
        this.app.use(this.carritoPath, require('../routes/carrito'))
        this.app.use(this.checkoutPath, require('../routes/checkout'))
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Sevidor corriendo en:', this.port)
        } )
    }
}

module.exports = Server