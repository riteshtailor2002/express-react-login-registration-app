const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const signup = async (req, res, db) => {
    const Op = db.Sequelize.Op;
    // Save User to Database
    try 
    {
        const user = await db.userModel.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });

        if (req.body.roles) {
            const roles = await db.roleModel.findAll({
                    where: {
                    name: {
                        [Op.or]: req.body.roles,
                    },
                },
            });
            const result = user.setRoles(roles);
            if (result) res.send({ message: "User registered successfully!" });
        } else {
            // user has role = 1
            const result = user.setRoles([1]);
            if (result) res.send({ message: "User registered successfully!" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
module.exports = {signup};