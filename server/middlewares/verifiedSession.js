


const vefiredSession = (req, res, next ) => {
    if (!req.session.loggedin) {
      req.session.loggedin = true;
      console.log('Eliminar Carrito')
    }
    next();
  }

module.exports = {
    vefiredSession
}