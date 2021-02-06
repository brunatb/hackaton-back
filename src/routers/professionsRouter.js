const router = require('express').Router();

const professionsController = require('../controllers/professionsController');

router.get('/', (req, res) => {
  const professions = professionsController.getAllProfessions();
  res.send(professions);
});

module.exports = router;
