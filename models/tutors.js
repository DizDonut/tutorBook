const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs')
mongoose.promise = Promise

const TutorSchema = new Schema({
    username: {type:String, required: true, trim:true, unique:true },
    password: {type: String, required: true, trim: true, select: false},
    email: {type:String, required: true},
    tutorPic: {data:Buffer, contentType: String, required: false},
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
      	end: {type: Date, default: Date.now}
    }]
});


TutorSchema.methods = {
    addHash: function (newTutor, callback) {
        // TutorSchema.pre('save', function(newTutor,callback) {//next arg
        bcrypt.genSalt(12, function (err, salt) {
            bcrypt.hash(newTutor.password, salt, function (err, hash) {
                newTutor.password = hash;
                newTutor.save(callback);
            })
        })
    },
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    validPassword: function(password, passwd, done, user) {
        return bcrypt.compare(password, passwd)
    }
}

// Tutor.addHash = function(newTutor,callback) {
// // TutorSchema.pre('save', function(newTutor,callback) {//next arg
//     bcrypt.genSalt(12, function(err,salt) {
//         bcrypt.hash(newTutor.password,salt, function(err,hash) {
//             newTutor.password = hash;
//             newTutor.save(callback);
//         })
//     })
//     // next()

// };

// Tutor.validPassword = function(password, passwd, done, user){
//     bcrypt.compare(password, passwd, function(err, isMatch){
//         if (err) console.log(err)
//         if (isMatch) {
//             return done(null, user)
//         } else {
//             return done(null, false)
//         }
//     })
// };

// TutorSchema.pre('save', function(next) {
//     var self = this;
//     if(!this.password) {
//         console.log('=======NO PASSWORD PROVIDED=======')
//         next()
//     } else {
//         this.password = this.addHash(this.password)
//         next()
//     }
// })
const Tutor = mongoose.model('Tutor', TutorSchema);

module.exports = Tutor;
