const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/controller');

router.get('/about', function (req, res) {
    console.log("About api initiated");
    res.send('Welocome to Prison Management ');

});


//////////////////////////////////////////////API END POINTS////////////////////////////////////////////////////////

///////////////////////////Search
router.post('/search_by_name',controller.search_by_name);
router.post('/search_all',controller.search_all);
router.post('/search_details_of_criminal',controller.show_prisoners_details_by_id);

///////////////////////////Add New Info
router.post('/add_criminal_info', controller.add_criminal_info);
router.post('/add_case_details',controller.add_case_info);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;