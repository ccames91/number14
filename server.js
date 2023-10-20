const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const hbs = handlebars.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});