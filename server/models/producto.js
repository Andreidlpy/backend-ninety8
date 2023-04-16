const { DataTypes } = require('sequelize')
const { db  } = require('../db/dbConnection');

const Producto = db.define('Producto', {
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
    },
    descuento: {
      type: DataTypes.DECIMAL(10, 2),
    },
    image: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    public_id:{
      type: DataTypes.STRING,
    }
  });
  
  module.exports = Producto;