const router = require('express').Router();

const quizzController = require('../controllers/quizzController');

router.get('/', (req, res) => {
  const name = quizzController.sayHello();
  res.send(name);
});

module.exports = router;
