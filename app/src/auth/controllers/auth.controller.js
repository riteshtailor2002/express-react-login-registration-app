
const AuthService = require('../services/auth.service');
exports.signup = async (req, res, db) => { 
    //res.json({ message: "This is signup request" });
    AuthService.signup(req, res, db);    
};
exports.welcome = async (req, res, db) => {
    res.json({ message: "Welcome to welcome." });
};