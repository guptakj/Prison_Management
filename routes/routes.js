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
router.post('/add_parole_info', controller.add_parole_info);
router.post('/add_interview_request', controller.add_interview_request);
router.post('/add_in_out_register', controller.add_in_out_register);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;