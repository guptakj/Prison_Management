const Criminals = require('../models/criminals');
const Case_register=require('../models/case_register');
const Diary_register=require('../models/diary_register');
const In_out_register=require('../models/in_out_register');


exports.add_criminal_info = function (req, res) {
    console.log("Adding api is called");
    let info = new Criminals(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            crime_details:req.body.crime_details,
            age:req.body.age,
            address: req.body.address,
            gender:req.body.gender ,
            nationality: req.body.nationality,
            occupation: req.body.occupation,
            photo :req.body.photo,
            officer_in_charge:req.body.office_in_charge

        }
    );

    var articles_subm= req.body.articles;
    var articles= articles_subm.split(",");
    for(var i=0;i<=articles.length;i++)
    {
        info.article_submitted.push(articles[i]);
    }


    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New criminal info added successfully');
        res.send(info);
    });


};



exports.search_by_name= function (req , res) {
    var criminal_name = req.body.name;
    console.log("Search By Name Api is called");
    Criminals.find({name:{$in: criminal_name} }, function (err, user) {
        res.send(user);
    });
};

exports.search_all= function (req , res) {
    console.log("Search All Api is called");

    Criminals.find( function (err, user) {
        res.send(user);
    });
};
