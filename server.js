const express = require("express");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require("express-handlebars"); 
const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const db = require("./models");

const sessionStore = new SequelizeStore({
  db: db.sequelize,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { maxAge: 3600000 }, 
  })
);

sessionStore.sync();

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

