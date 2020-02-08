const Criminals = require('../models/criminals');
const Case_register=require('../models/case_register');
const Diary_register=require('../models/diary_register');
const In_out_register=require('../models/in_out_register');


exports.add_criminal_info = function (req, res) {
    console.log("Add criminal Information api is called");
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

exports.add_case_info = function (req, res) {
    console.log("Adding case info api is called");
    let data = new Case_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            sentence_duration:req.body.duration
        }
    );

    var conviction= req.body.conviction_details;
    var conv_details= conviction.split(",");
    for(var i=0;i<=conv_details.length;i++)
    {
        data.conviction_details .push(conv_details[i]);
    }


    data.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New criminal info added successfully');
        res.send(data);
    });


};

exports.show_prisoners_details_by_id =function(req,res){
    var id = req.body.id;
    console.log("Show_Prisoner_details_by_id Api is called");
    // Criminals.find({prisoner_id:{$in: id} }, function (err, user) {
    //     res.send(user);
    // });
    // Criminals.aggregate(
    //     {
    //         $lookup:
    //             {
    //                 from: "case_register",
    //                 as: "enrollee_info"
    //             }
    //     },function(err,user){
    //         console.log(user);
    // });
    // res.send()
};