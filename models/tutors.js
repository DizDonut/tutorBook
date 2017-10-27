const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs')

const TutorSchema = new Schema({
    username: {type:String, required: true, trim:true, unique:true },
    password: {type:String, required: true, trim:true},
    email: {type:String, required: true}
});

const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;

//currently only works if you call it. 
Tutor.addHash =function(newTutor,callback) {
// TutorSchema.pre('save', function(newTutor,callback) {//next arg
    bcrypt.genSalt(12, function(err,salt) {
        bcrypt.hash(newTutor.password,salt, function(err,hash) {
            newTutor.password = hash;
            newTutor.save();
            callback();
        })
    })
    // next()
    
};

// module.exports.createTutor = function(newTutor, callback) {
//     bcrypt.genSalt(12, function(err,salt) {
//         bcrypt.hash(newTutor.password,salt, function(err,hash) {
//             newTutor.password = hash;
//             newTutor.save(callback);
//         })
//     })
// }

Tutor.validPassword = function(password, passwd, done, user){
    // console.log(`password is ${password}`)
    // console.log(`passwd is ${passwd}`)
    // console.log(user);
    bcrypt.compare(password, passwd, function(err, isMatch){
        if (err) console.log(err)
        if (isMatch) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
};
//encryption occurs here before password logged to database
// User.hook('beforeCreate', function(user, fn){
//     var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
//         return salt
//     });
//     bcrypt.hash(user.password, salt, null, function(err, hash){
//         //replaced next() with console.log()
//         var fn = function fn() {};
//         if(err) return err;
//         console.log(user.password);
//         User.update({password: hash}, {where: {username:user.username}})
//         // user.password = hash;
//         console.log(user.password);
//         return fn(null, user)
//     });
// });
//   return User;
// };