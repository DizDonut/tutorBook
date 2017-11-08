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
  // Saves a student to the database - USE THIS FUNCTION TO CREATE A NEW STUDENT!
  saveStudent: function(studentData) {
    //alert(JSON.stringify(studentData));
    //alert(studentData.tutorId);
    //alert(studentData.profile.name);
    return axios.post("/api/students/" + studentData.tutorId, studentData.profile);
  },
  register: function(registrationData) {
    return axios.post("/api/authenticate/register",registrationData)
  },
  login: function(loginData) {
    return axios.post("api/authenticate/login",loginData)
  },
  logout: function(logoutData) {
    return axios.post("api/authenticate/logout",logoutData)
  },
  getTutor: function(id) {
    return axios.get("/api/tutors/" + id);
  },
  updateTutor: function(data){
    return axios.put("/api/tutors/" + data.id, data.profile);
  },
  addEvent: function(id){
    return axios.put("/api/tutors" + id);
  },
};
