const {router} = require('express');

const pageRouter = router();

pageRouter.get('/', (req, res) => {
  res.render('home');
});

module.exports = pageRouter;