const router = require('express').Router();
const skillsController = require('../controllers/skillsController');

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  await skillsController.createSkill(name, description);
  res.sendStatus(201);
});

router.get('/', async (req, res) => {
  const skills = await skillsController.getAllSkills();
  res.send(skills);
});

router.post('/links', async (req, res) => {
  const { links } = req.body;
  await skillsController.createLinks(links);
  res.sendStatus(201);
});

module.exports = router;
