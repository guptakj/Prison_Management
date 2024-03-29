const Criminals = require('../models/criminals');
const Case_register=require('../models/case_register');
const Diary_register=require('../models/diary_register');
const In_out_register=require('../models/in_out_register');
const Parole_register=require('../models/parole_register');
const Interview_register=require('../models/interview_request');
const Duty_register=require('../models/duty_register');
const Data=require('../models/data');
const Admin=require('../models/admin');
const Police=require('../models/police');

const next = require("mongodb");

exports.log_admin= function (req , res) {
    
    console.log("Admin login Api is called");
    Admin.find( function (err, user) {
        res.send(user);
       

    });
};
exports.log_police= function (req , res) {
    
    console.log("Police login Api is called");
    Police.find( function (err, user) {
        res.send(user);
       

    });
};
exports.log_data= function (req , res) {
    
    console.log("Data Manager login Api is called");
    Data.find( function (err, user) {
        res.send(user);
       

    });
};
exports.add_admin_info = function (req, res) {
    console.log("Add admin Information api is called");
    let info = new Admin(
        {
            admin_user:req.body.admin_name1,
            admin_pass:req.body.admin_pass1

        }
    );

    Admin.find({admin_user:info.admin_user},(err,data)=>{
        if(data.length>=1)
        {
            res.send(`
                <h1>Username has been already taken.Try another</h1>
                <h1><a href="/home.html" style="text-decorartion:none;">Home</a></h1>
                `);
        }
        else{
            info.save(function (err) {
                if (err) {
                    return next(err);
                }

                console.log(info);
                res.send(`
                <h1>Successfully registered as `+info.admin_user+`.</h1>
                <h1><a href="/home.html" style="text-decorartion:none;">Home</a></h1>
                `);
            });
        }
    });




};


exports.add_police_info = function (req, res) {
    console.log("Add police Information api is called");
    let info = new Police(
        {
            police_user:req.body.police_user,
            police_pass:req.body.police_pass

        }
    );

    Police.find({police_user:info.police_user},(err,data)=>{
        if(data.length>=1)
        {
            res.send(`
                <h1>Username has been already taken.Try another</h1>
                <h1><a href="/home.html" style="text-decorartion:none;">Home</a></h1>
                `);
        }
        else{
            info.save(function (err) {
                if (err) {
                    return next(err);
                }

                console.log(info);
                res.send(`
                <h1>Successfully registered as `+info.police_user+`.</h1>
                <h1><a href="/home.html" style="text-decorartion:none;">Home</a></h1>
                `);
            });
        }
    });


};

exports.add_data_info = function (req, res) {
    console.log("Add data manager Information api is called");
    let info = new Data(
        {
            data_user:req.body.data_user,
            data_pass:req.body.data_pass

        }
    );

    Data.find({data_user:info.data_user},(err,data)=>{
        if(data.length>=1)
        {
            res.send(`
                <h1>Username has been already taken.Try another</h1>
                <h1><a href="/home.html" style="text-decorartion:none;">Home</a></h1>
                `);
        }
        else{
            info.save(function (err) {
                if (err) {
                    return next(err);
                }

                console.log(info);
                res.send(`
                <h1>Successfully registered as `+info.data_user+`.</h1>
                <h1><a href="/home.html" style="text-decorartion:none;">Home</a></h1>
                `);
            });
        }
    });


};
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
        //res.send(user);
    });


};

exports.add_parole_info = function (req, res) {
    console.log("Adding api is called");
    let info = new Parole_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            address:req.body.address,
            reason:req.body.reason,
            sentence :req.body.sentence,
            officer_in_charge:req.body.office_in_charge

        }
    );
    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New criminal info added successfully');
        res.send(info);
    });

};


exports.add_in_out_register = function (req, res) {
    console.log("Adding api is called");
    let info = new In_out_register(
        {
            visitor_type:req.body.visitor_type,
            visitor_id:req.body.visitor_id,
            visitor_name:req.body.visitor_name,
            date_in:req.body.date_in,
            date_out:req.body.date_out,
            time_in:req.body.time_in,
            time_out:req.body.time_out,
            place:req.body.place

        }
    );
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
        res.render('show',{user:user});
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

exports.duty_register = function (req, res) {
    console.log("Duty register api is called");
    let info = new Duty_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            department_id:req.body.department_id,
            department_name:req.body.department_name,
            shift:req.body.shift

        }
    );

    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('Duty register updated successfully');
        res.send(info);

    });


};

exports.search_criminal_department_by_name= function (req , res) {
    var criminal_name=req.body.name;
    console.log("search criminal department by name Api is called");
    Duty_register.find({name:{$in: criminal_name} }, function (err, user) {
        res.send(user);
    });
};


exports.search_all_criminal_department= function (req , res) {
    console.log("search all criminal department Api is called");
    Duty_register.find( function (err, user) {
      
       res.render('show',{user:user});
    });
};

exports.diary_register = function (req, res) {
    console.log("Diary register api is called");
    let info = new Diary_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            sentence_begin:req.body.sentence_begin,
            sentence_end: req.body.sentence_end

        }
    );

    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New criminal info in Diary Register added successfully');
        res.send(info);
    });

};

exports.interview_register= function(req,res)
{
    console.log("Adding api is called");
    let info = new Interview_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            visitor_name:req.body.vname,
            relation_with_prisoner:req.body.relation,
            duration:req.body.duration,
            time_start:req.body.time_start,
            time_end:req.body.time_end,
            visit_date:req.body.date1

        }
    );


    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New criminal info added successfully');
        res.send(info);
    });


};

exports.search_interview_prisoner_by_name= function (req , res) {
    var prisoner_name = req.body.name;
    console.log("Search By Name Api is called");
    Interview_register.find({name:{$in:prisoner_name } }, function (err, user) {
        

        res.send(user);
    });
};

exports.search_all_interview_prisoner= function (req , res) {
   
    console.log("Search By all interview prisoner Api is called");
    Interview_register.find( function (err, user) {

        res.render('show_all_interview_prisoner',{user:user});
    });
};
//------------------------------------------------------parole------------------------------------------------//
exports.Parole_register= function(req,res)
{
    console.log("Adding parole_register api is called");
    let info = new Parole_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            address:req.body.address,
            reason:req.body.reason,
            sentence :req.body.sentence,
            officer_in_charge:req.body.officer_in_charge

        }
    );


    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New prisoner parole info added successfully');
        res.send(info);
    });


};
exports.search_parole_prisoner= function (req , res) {
   
    console.log("Search all parole prisoner Api is called");
    Parole_register.find( function (err, user) {

        res.render('show_parole_prisoner',{user:user});
    });
};

//---------------------------------------------------------------duty----------------------------------------////

exports.Duty_register= function(req,res)
{
    console.log("Adding duty_register api is called");
    let info = new Duty_register(
        {
            prisoner_id:req.body.id,
            name:req.body.name,
            department_id:req.body.department_id,
            department_name:req.body.department_name,
            shift:req.body.shift

        }
    );


    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New prisoner duty info added successfully');
        res.send(info);
    });


};
exports.search_duty_prisoner= function (req , res) {
   
    console.log("Search duty prisoner Api is called");
    Duty_register.find( function (err, user) {

        res.render('duty_prisoner',{user:user});
    });
};
//---------------------------------------IN-OUT----------------------------------------------------//
exports.In_out_register= function(req,res)
{
    console.log("Adding In_out DETAILS api is called");
    let info = new In_out_register(
        {
            Visitor_type:req.body.Visitor_type,
            visitor_id:req.body.visitor_id,
            visitor_name:req.body.visitor_name,
            date_in:req.body.date_in,
            date_out:req.body.date_out,
            time_in:req.body.time_in,
            time_out:req.body.time_out,
            place:req.body.place
        }
    );


    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New prisoner in-out info added successfully');
        res.send(info);
    });


};
exports.search_in_out_prisoner= function (req , res) {
   
    console.log("Search in-out prisoner Api is called");
    In_out_register.find( function (err, user) {

        res.render('in-out_prisoner',{user:user});
    });
};
//-------------------------------------------------------DIARY--------------------------------------------------///
exports.Diary_register= function(req,res)
{
    console.log("Adding DIARY DETAILS api is called");
    let info = new Diary_register(
        {
            prisoner_id:req.body.prisoner_id,
            name:req.body.name,
            sentence_begin:req.body.sentence_begin,
            sentence_end:req.body.sentence_end
        }
    );


    info.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('New prisoner diary info added successfully');
        res.send(info);
    });


};
exports.search_all_prisoner_diary= function (req , res) {
   
    console.log("Search all prisoner diary Api is called");
    Diary_register.find( function (err, user) {

        res.render('diary_of_all_prisoner',{user:user});
    });
};
//--------------------------------------------------------------------------------------------------------------
exports.count_prisoners= function (req , res) {
    console.log("Count");

    Criminals.count().then((count) => {
        console.log(count);
    });
};


exports.global_search= function (req , res) {
    var pid = req.body.id;
    Criminals.findOne({prisoner_id:pid }, function (err, user) {
        Case_register.findOne({prisoner_id :pid , name : user.name},function (err,user2) {
            var result=[];
            // result[0]={
            //     "name": user.name,
            //     "prisoner_id" : pid,
            //     "conviction_details": user2.conviction_details,
            //     "age": user.age
            // }
            result.push(user2);
            result.push(user);
            res.send(result);
        });

    });

};

exports.search_all_prisoner_case_reg= function (req , res) {

    console.log("Search case register  Api is called");
    Case_register.find( function (err, user) {

        res.render('show_case',{user:user});
    });
};
