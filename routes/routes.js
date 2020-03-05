const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/controller');

router.get('/about', function (req, res) {
    console.log("About api initiated");
    res.send('Welocome to Prison Management ');

});


//////////////////////////////////////////////API END POINTS////////////////////////////////////////////////////////

///////////////////////////Search/////////////////////////////////////////////////////////////////////////////////
router.get('/search_by_name',controller.search_by_name);
router.get('/search_all',controller.search_all);
router.get('/log_admin',controller.log_admin);
//router.post('/search_details_of_criminal',controller.show_prisoners_details_by_id);
router.post('/search_interview_prisoner_by_name',controller.search_interview_prisoner_by_name);
router.get('/search_all_interview_prisoner',controller.search_all_interview_prisoner);
router.post('/search_criminal_department_by_name',controller.search_criminal_department_by_name);
router.get('/search_all_criminal_department',controller.search_all_criminal_department);
router.get('/search_parole_prisoner',controller.search_parole_prisoner);
router.get('/search_duty_prisoner',controller.search_duty_prisoner);
router.get('/search_in_out_prisoner',controller.search_in_out_prisoner);
router.get('/search_all_prisoner_diary',controller.search_all_prisoner_diary);




router.post('/global_search',controller.global_search);



///////////////////////////Add New Info/////////////////////////////////////////////////////////////////////////
router.post('/add_criminal_info', controller.add_criminal_info);
router.post('/add_parole_info', controller.add_parole_info);
//router.post('/add_interview_request', controller.add_interview_request);
router.post('/add_in_out_register', controller.add_in_out_register);
router.post('/interview_register',controller.interview_register);
router.post('/add_case_details',controller.add_case_info);
router.post('/duty_register',controller.duty_register);
router.post('/diary_register',controller.diary_register);
router.post('/add_admin_info',controller.add_admin_info);
router.post('/add_police_info',controller.add_police_info);
router.post('/add_data_info',controller.add_data_info);
router.get('/count',controller.count_prisoners);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;