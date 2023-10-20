const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const db = require('./models');
const app = express();

dotenv.config();

console.log('Session Secret:', process.env.SESSION_SECRET);
console.log('Database Name:', process.env.DB_NAME); 

const sessionStore = new SequelizeStore({
  db: db.sequelize,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

