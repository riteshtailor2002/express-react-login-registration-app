const config = {
  HOST: `${process.env.MYSQLDB_HOST}`,
  USER:`${process.env.MYSQLDB_USER}`,
  PASSWORD: `${process.env.MYSQLDB_ROOT_PASSWORD}`,
  DB: `${process.env.MYSQLDB_DATABASE}`,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;


