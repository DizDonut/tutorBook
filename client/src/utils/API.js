import axios from "axios";

export default {
  // Gets all students
  getStudents: function() {
    return axios.get("/api/students");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function(id) {
    return axios.delete("/api/students/" + id);
  },
  // Saves a student to the database
  saveStudent: function(studentData) {
    return axios.post("/Tutors/addStudent", studentData);
  },
  register: function(registrationData) {
    return axios.post("/api/authenticate/register",registrationData)
  },
  getTutor: function(id) {
    var realID = id.id;
    return axios.get("/api/tutors/" + realID);
  },
  updateTutor: function(data){
    alert("updateTutor");
    return axios.put("/api/tutors/" + data.username, data);
  },
  addEvent: function(id){
    return axios.put("/api/tutors" + id);
  },
};
