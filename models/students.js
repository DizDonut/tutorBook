const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  birthday: String,
  age: { type: Number, required: false},
  location: { type: String, required: false, trim: true },
  // studentId: {type:Number},
  description: {type: String, required: false},
  classVideo: {type: String, required: false},
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