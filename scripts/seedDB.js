const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/baobaoBook",
    {
      useMongoClient: true
    }
  );

var devTutor = new db.Tutor({
  username: 'admin',
  email: 'admin@test.com',
  password: 'admin'
});

var newStudent = new db.Student({
  picture: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0001-CUSA05855_00-AV00000000000010/1508519815000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100",
  firstName: "Clay",
  age: "29",
  description: "Awesomeness! A joy to teach. Taught me everything I know!",
  location: "Cherryville",
  studentId: 123456,
  classVideo: "url goes here",
  family: {mom:true, dad:true, sister:false,brother:false},
  likes: ["Movies", "Coding", "Coffee", "lots of Coffee", "all the Coffee"],
  birthday: "January 30"
});

// Start the API server
db.Tutor
.findOne({ username: "admin" })
.then(function (user) {
  if (!user) {
    devTutor
    .addHash(devTutor, function (err, user) {
      if (err) return handleError(err);
        db.Student
        .findOne({ firstName: "Clay" })
        .then(function (student) {
          if (!student) {
            newStudent.save(function (error, doc) {
              if (error) {
                console.log(error)
              }
              db.Tutor
              .updateOne({ username: "admin" }, { $set: { "students": doc._id } })
              .exec(function (err, doc) {
                  if (err) {
                    console.log(err);
                  }
                  console.log(`student added:`);
                  console.log(doc);
              })
            })
          }
      })
      console.log(`logged in with ${user}`)
    })
  }
})
  // const tutorSeeds = [
  //   {
  //   username: "sam",
  //   password: "admin",
  //   email: "sam@gmail.com",
  //   tutorPic:"url",
  //   contract:"contract details",
  //   totalStudents:"1"
  //   }

  // ]
  // db.Tutor
  // .remove({})
  // .then(() => db.Tutor.collection.insertMany(studentSeed))
  // .then(data => {
  //   console.log(data.insertedIds.length + " records inserted!");
  //   process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });


  //   teacherName:"",
  //   teacherPic:"",
  //   contract:"",
  //   totalStudents:"",
  //   studentName:"",
  //   studentAge:"",
  //   lastTaught:"",
  //   studentLocation:"",
  //   studentShortDescription:""
  // ]

//run a command from mongo to add students to specific tutors in db for demo purposes

    // const tutorSeed = [
  //   {
  //     studentPic:"https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0001-CUSA05855_00-AV00000000000010/1508519815000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100",
  //     studentName:"Clay",
  //     studentAge:"29",
  //     studentDescription: "Awesomeness! A joy to teach. Taught me everything I know!",
  //     studentCity:"Cherryville",
  //     classVideo:"",
  //     friendFamDescription:"One brother. All kinds of friends.",
  //     favorites: "Movies, Coding, Coffee, lots of Coffee, all the Coffee",
  //     birthday:"January 30"
  //   },
  //   {
  //     StudentPic: "https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png",
  //     studentName:"Ruby",
  //     studentAge:"10",
  //     studentDescription: ["Awesomeness!", "A joy to teach.", "Taught me everything I know!"],
  //     studentCity:"Happy Town",
  //     classVideo:"url",
  //     friendFamDescription:["family","friends"],
  //     favorites: ["hobbies1","hobbies2","hobbies3"],
  //     birthday:"January 30"
  //   },
  //   {
  //     StudentPic: "https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png",
  //     studentName:"Kaisey",
  //     studentAge:"6",
  //     studentDescription: ["Awesomeness!", "A joy to teach.", "Taught me so much!"],
  //     studentCity:"Pleasantville",
  //     classVideo:"url",
  //     friendFamDescription:["family","friends"],
  //     favorites: ["hobbies1","hobbies2","hobbies3"],
  //     birthday:"January 31"
  //   },
  //   {
  //     StudentPic: "https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png",
  //     studentName:"Mike",
  //     studentAge:"12",
  //     studentDescription: ["Awesomeness!", "A joy to teach.", "Taught me battle pals!"],
  //     studentCity:"Sector 7",
  //     classVideo:"url",
  //     friendFamDescription:["family","friends"],
  //     favorites: ["hobbies1","hobbies2","hobbies3"],
  //     birthday:"January 1"
  //   },
  //   {
  //     StudentPic: "https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png",
  //     studentName:"Terri",
  //     studentAge:"8",
  //     studentDescription: ["Awesomeness!", "A joy to teach.", "Taught me to dougie!"],
  //     studentCity:"Whens Township",
  //     classVideo:"url",
  //     friendFamDescription:["family","friends"],
  //     favorites: ["hobbies1","hobbies2","hobbies3"],
  //     birthday:"January 15"
  //   },
  //   {
  //     StudentPic: "https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png",
  //     studentName:"Jonathan",
  //     studentAge:"13",
  //     studentDescription: ["Interesting!", "A handful, but likes to learn.", "Exceptional!"],
  //     studentCity:"Corner Village",
  //     classVideo:"url",
  //     friendFamDescription:["family","friends"],
  //     favorites: ["hobbies1","hobbies2","hobbies3"],
  //     birthday:"January 10"
  //   },
  // ]
  