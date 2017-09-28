var User = require('mongoose').model('User');
exports.list = function(req,res,next){
  User.find({},function(err,users){
    if(err){
      return next(err);
    } else {
      res.json(users);
    }
  });
};


exports.create= function(req,res,next){

 // res.render('index1', {
 //    title: 'Hello World 2'
 //   });

  var user = new User(req.body);
  user.save(function(err) {
    if(err) {
      return next(err);
    } else {
      res.status(200).json(user);
    }
  });
};
