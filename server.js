const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const router = express.Router();
const path = require('path');
const basepath = path.join(__dirname,'');
const db = require(path.join(__dirname, 'app/config/db.config'));

//confirming our env constants are working fine below
//console.log(`Printing to test .env constants ${process.env.COOKIE_SECRET}`);

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
db.sequelize.sync();


app.use(
  cookieSession({
    name: "app-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
  })
);


// module routes and sending db and router as a dependency injection
const authRoute = require(path.join(__dirname, 'app/src/auth/routes/index'))(db, router);
app.use('/auth', authRoute);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});