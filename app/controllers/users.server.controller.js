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

  exports.read = function(req,res){
    res.json(req.user);
  };

  exports.userByID= function(req,res,next,id){
    User.findOne({
      _id: id
    }, function(err,user){
      if(err){
        return next(err);
      }else{
        req.user=user;
        next();
      }
    });
};

exports.update=function(req,res,next){
  User.findByIdAndUpdate(req.user.id,req.body,function(err,user){
    console.log(req.user);
    console.log(req.body);
    if (err){
      return next(err);
    }else{
      res.json(user);
    }
  });
};

exports.delete = function(req,res,next)
{
  req.user.remove(function(err){
    if(err){
      return next(err);
    }
    else{
      res.json(req.user);
    }
  })
};
