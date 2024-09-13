module.exports = (db, router) => {    
    const AuthController = require('../controllers/auth.controller');
    const dbObject = require('../models/index')(db);
    const middlewareObject = require('../../../middleware/index');
    const { verifySignUp, authJwt } = middlewareObject(dbObject);  // Pass dbObject to middleware
    /* Post request to sign up user */
    router.post('/signup', [
        verifySignUp.checkDuplicateUsernameOrEmail(dbObject),
        verifySignUp.checkRolesExisted(dbObject),
    ], (req, res) => AuthController.signup(req, res, dbObject));
    router.get('/welcome', (req, res) => AuthController.welcome(req, res, dbObject));
    return router;
};