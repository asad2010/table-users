const express = require('express') 

const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.getInfo)
router.post('/:id', controller.getOneInfo)
router.post('/add', controller.addInfo)
router.get('/edit/:id',controller.edit)
router.post('/edit/:id', controller.editInfo)
router.get('/delete/:id', controller.delInfo)

module.exports = router