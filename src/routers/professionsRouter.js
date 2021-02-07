const router = require('express').Router();

const professionsController = require('../controllers/professionsController');

router.get('/', async (req, res) => {
  const professions = await professionsController.getAllProfessions();
  res.send(professions);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const profession = await professionsController.getProfessionById(id);
  res.send(profession);
});

router.post('/', async (req, res) => {
  const { name, image } = req.body;
  await professionsController.createProfession(name, image);
  res.sendStatus(201);
});

router.post('/skills', async (req, res) => {
  const { professionId, skillId } = req.body;
  await professionsController.createProfessionsSkills(professionId, skillId);
  res.sendStatus(201);
});

module.exports = router;
