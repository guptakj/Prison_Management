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
router.post('/add_parole_info', controller.add_parole_info);
router.post('/add_interview_request', controller.add_interview_request);
router.post('/add_in_out_register', controller.add_in_out_register);


router.post('/add_case_details',controller.add_case_info);

router.post('/duty_register',controller.duty_register);
router.post('/search_criminal_department_by_name',controller.search_criminal_department_by_name);
router.post('/search_all_criminal_department',controller.search_all_criminal_department);
router.post('/diary_register',controller.diary_register);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;