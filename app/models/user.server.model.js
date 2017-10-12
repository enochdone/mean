var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: {
    type: String,
    trim: true
  },
  password:String,
  created: { 
    type: Date,
    default: Date.now
  },
  website: {
    type: String,
    get: function(url) {
      if (!url) {
        return url;
      }else {
        if (url.indexOf('http://')!== 0 &&
            url.indexOf('https://' + url;
                        }
                        return url;
                        }
                        }
                        }
});
            UserSchema.virtual('fullName').get(function() {
          return this.firstName + ' ' + this.lastName;
        });

            UserSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('User',UserSchema);
