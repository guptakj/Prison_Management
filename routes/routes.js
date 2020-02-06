const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/controller');

router.get('/about', function (req, res) {
    console.log("About api initiated");
    res.send('Welocome to Prison Management ');

});


//////////////////////////////////////////////API END POINTS////////////////////////////////////////////////////////

///////////////////////////GET
router.post('/search_by_name',controller.search_by_name);
router.post('/search_all',controller.search_all);


///////////////////////////POST
router.post('/add_criminal_info', controller.add_criminal_info);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;