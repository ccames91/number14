const router = require('express').Router();
const { SomeModel } = require('../../models'); 
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newItem = await SomeModel.create({
      ...req.body,
      user_id: req.session.user_id, 
    });

    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
   
    const itemData = await SomeModel.destroy({
      where: {
        id: req.params.id, 
        user_id: req.session.user_id,
      },
    });

    if (!itemData) {
      res.status(404).json({ message: 'No item found with this id!' });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

sessionStore.sync();

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

