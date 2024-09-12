module.exports = (db) => {
    db.user = require("./user.model")(db.sequelize, db.Sequelize);
    db.role = require("./role.model")(db.sequelize, db.Sequelize);    
    db.role.belongsToMany(db.user, {
      through: "user_roles"
    });
    db.user.belongsToMany(db.role, {
      through: "user_roles"
    });    
    db.ROLES = ["user", "admin", "moderator"];
}