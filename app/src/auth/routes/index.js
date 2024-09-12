module.exports = (db) => {
    const express = require('express');
    const router = express.Router();
    const AuthController = require('../controllers/auth.controller');
    const AuthModels = require('../models/index')(db);
    router.get('/', (req, res) => AuthController.home(req, res, AuthModels));
    router.get('/welcome', (req, res) => AuthController.welcome(req, res, AuthModels));
    return router;
};