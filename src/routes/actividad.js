const express =require('express');
const router = express.Router();

const actividadController = require('../controllers/actividadControllers');

router.get('/', actividadController.list);
router.post('/add', actividadController.save);
router.get('/delete/:id', actividadController.delete);

router.get('/update/:id', actividadController.edit);
router.post('/update/:id', actividadController.update);

module.exports = router;