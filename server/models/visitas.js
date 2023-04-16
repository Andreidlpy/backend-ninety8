const { DataTypes } = require('sequelize');
const { db } = require('../db/dbConnection');

const Visita = db.define('Visita', {
  sessionId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visitas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = Visita;