const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  picture: { type: String, trim:true, required:false},
  birthday: {type:String},
  age: { type: Number, required: false},
  location: { type: String, required: false, trim: true },//To do: change to select list
  studentId: {type:Number},//always 6 or 7 digits 
  description: [String],//personality tags
  classVideo: {type: String, required: false},//url
  family: {
    mom: {type:Boolean, default:false},
    dad: {type: Boolean, default: false },
    brother: {type: Boolean, default: false },
    sister: {type: Boolean, default: false }
  },
  likes: [String],
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note",
    required: false
  }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

// lastName: { type: String, required: true, trim:true },
// pronunciation: { type: String, required: true, trim:true },
// picture: { data: Buffer, contentType: String },
// rewards: [String],


// timesTaught:{ type: Number},
// gaps: [String],
// birthday: Schema.Types.Mixed,
// hobbies: [String],
// attendance: [Schema.Types.Mixed],
// note: {
//   type: [Schema.Types.ObjectId],
//   ref: "Note"
// }