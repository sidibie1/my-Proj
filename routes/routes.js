const express = require('express');
const userTable = require('../controllers/detailController');
const router = express.Router();

router.post('/addNewDetails', userTable.addNewDetailsFunc);
router.get('/getDetails/:name', userTable.getDetailsFunc);
router.get('/getAllData',userTable.getAllDataFunc);
router.delete('/deleteDetails', userTable.deleteDataFunc);


module.exports = router;