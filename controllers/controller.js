const Criminals = require('../models/criminals');

exports.add_criminal_info = function (req, res) {
    console.log("Adding api is called");
    let info = new Criminals(
        {
            name: req.body.name,
            crime: req.body.crime
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
        res.send(user);
    });
};
