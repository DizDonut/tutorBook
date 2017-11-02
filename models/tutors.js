const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs')

const TutorSchema = new Schema({
    username: {type:String, required: true, trim:true, unique:true },
    password: {type:String, required: true, trim:true},
    email: {type:String, required: true},
    tutorPic: {type:String,required: false},
    contract: {type:String,required: false},
    students: [{
        type: Schema.Types.ObjectId,
        ref: "Student",
        required:false
      }],
    events: [{
      	title: {type: String, required: false},
      	allday: {type: Boolean, default: false, required: false},
      	start: {type: Date, default: Date.now},
      	end: {type: Date, default: Date.now + 1}
    }]
});

const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;


Tutor.addHash = function(newTutor,callback) {
// TutorSchema.pre('save', function(newTutor,callback) {//next arg
    bcrypt.genSalt(12, function(err,salt) {
        bcrypt.hash(newTutor.password,salt, function(err,hash) {
            newTutor.password = hash;
            newTutor.save(callback);
        })
    })
    // next()

};

Tutor.validPassword = function(password, passwd, done, user){
    bcrypt.compare(password, passwd, function(err, isMatch){
        if (err) console.log(err)
        if (isMatch) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
};
