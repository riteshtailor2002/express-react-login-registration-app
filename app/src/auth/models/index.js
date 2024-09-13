module.exports = (db) => {
    db.userModel = require("./user.model")(db.sequelize, db.Sequelize);
    db.roleModel = require("./role.model")(db.sequelize, db.Sequelize);    
    db.roleModel.belongsToMany(db.userModel, {
      through: "user_roles"
    });
    db.userModel.belongsToMany(db.roleModel, {
      through: "user_roles"
    });    
    db.ROLES = ["user", "admin", "moderator"];

    /* setting up initial roles */
    //initial();
    function initial() {
      db.roleModel.create({
        id: 1,
        name: "user"
      });
     
      db.roleModel.create({
        id: 2,
        name: "moderator"
      });
     
      db.roleModel.create({
        id: 3,
        name: "admin"
      });
    }
    return db;
};