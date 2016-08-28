var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
    return {
        show: function(req, res) {
            User.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        add: function(req, res) {
            var d = new Date();
            current_date = d.getTime();
            console.log(req.body);
            if(!req.body.name){
                console.log("name  cant be blank")
                res.json({error: "Name cannot be blank"})
            }
            else{
                User.findOne({name: req.body.name}, function(err, result2)
                {
                    if(!result2)
                    {
                        var user = User({name: req.body.name, date: d, date_string: current_date});

                        user.save(function(err, results) {
                            if(err) {
                                console.log(err);
                            } else {
                                res.json(results);
                            }
                        })
                    }
                    else{
                        if(result2.name == req.body.name){
                            console.log("Name exists");
                            res.json({error: "Name already exists"})
                        }


                    }
                })
            }

        }
    }
})();