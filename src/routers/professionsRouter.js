const router = require('express').Router();

const professionsController = require('../controllers/professionsController');

router.get('/', async (req, res) => {
  const professions = await professionsController.getAllProfessions();
  res.send(professions);
});

router.post('/', async (req, res) => {
  const { name, image } = req.body;
  await professionsController.createProfession(name, image);
  res.sendStatus(201);
});

module.exports = router;
