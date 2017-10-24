const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String, required: true, trim:true },
  lastName: { type: String, required: true, trim:true },
  pronunciation: { type: String, required: true, trim:true },
  picture: { data: Buffer, contentType: String },
  rewards: [String],
  timesTaught:{ type: Number},
  gaps: [String],
  age: { type: Number, min: 3, max: 18},
  birthday: Schema.Types.Mixed,
  location: { type: String, required: true, trim:true },
  hobbies: [String],
  attendance: [Schema.Types.Mixed],
  note: {
    type: [Schema.Types.ObjectId],
    ref: "Note"
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;