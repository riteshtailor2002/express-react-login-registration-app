module.exports = (db) => {
    const authJwt = require("./auth.jwt");
    const verifySignUp = require("./verify.signup");
    return {
      authJwt,
      verifySignUp
    };
};
