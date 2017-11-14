import React, { Component } from "react";
import Login from "../../components/Login";
import Join from "../../components/Join";
import Footer from "../../components/Footer";
// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';
import { Card, CardTitle, CardPanel, Container, Col, Row } from "react-materialize";
import API from "../../utils/API";

import { Redirect } from 'react-router-dom'
import "./Homepage.css";
import { Alert } from 'react-bootstrap';

// const url = require("/Images/tutorbg5.png")

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      tutor: null,
      redirectTo: "",
      register: "",
      bstyle: "",
      error:""
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    this._login = this._login.bind(this)
    this._join = this._join.bind(this)
    // this.redirectFunc = this.redirectFunc.bind(this)
  }


//When this component mounts grab the logged in status from local storage,
//if logged in counter is there, and if it's less than expires at, hide the login and register divs and provide a new button taking them directly in to the app. 

  _login(username, password) {
    API.login({ username, password }).then((res,err) => {
      if (res.data.error) {
        console.log(res.data.error)
      }
      if (res.data.loggedIn) {
        var tutor = {
          username: res.data.user.username,
          id: res.data.user._id,
          loggedIn: Date.now(),
          expiresAt: Date.now() + 1200000
        }
        localStorage.setItem("tutor", JSON.stringify(tutor))
        // update the state
        const data = localStorage.getItem("tutor");
        if (data) {
          this.setState({
            loggedIn: res.data.loggedIn,
            tutor: res.data.user,
            redirectTo: res.data.user.contract ? "Tutors" : "Tutors/account"
          });
        }
      } 
    })
  }

  _join(email,username, password) {
    API.register({
      email,
      username,
      password
    }).then((res, err) => {
      if (res.data.error) {
        this.setState({
          error: res.data.error,
          register: res.data.error,
          bstyle: "warning"
          // redirectTo: "/"
        });
        // alert(err)
      } else {
        // alert("New User Added!  Please login with your new credentials.")
        this.setState({
          register: "You're registered!",
          bstyle:"success"
          // redirectTo: "/"
        });
      }
    })
  }

  render(){
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="clearfix homepage">
         <Container>
             <Row>
                <Col l={6} m={6} s={12} >
                <Card className="large red  z-depth-0"
             header={<CardTitle image={"Images/Cover.jpg"}> </CardTitle>}>
           
            {/* <img src={'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'} /> */}
             <a class="github-button" href="https://github.com/kaibrown" aria-label="Follow @kaibrown on GitHub">Follow @kaibrown</a>
             <a class="github-button" href="https://github.com/tbphokie" aria-label="Follow @tbphokie on GitHub">Follow @tbphokie</a> 
             <a class="github-button" href="https://github.com/jbcurrie" aria-label="Follow @jbcurrie on GitHub">Follow @jbcurrie</a> 
             <a class="github-button" href="https://github.com/AgesilausDrako" aria-label="Follow @AgesilausDrako on GitHub">Follow @AgesilausDrako</a> 
             <a class="github-button" href="https://github.com/RubyDease" aria-label="Follow @RubyDease on GitHub">Follow @RubyDease</a> 
             <a class="github-button" href="https://github.com/DizDonut" aria-label="Follow @DizDonut on GitHub">Follow @DizDonut</a> 

           </Card>
                </Col>
                <Col l={6} m={6} s={12}>
                <Card className="large red z-depth-0">
                <Login _login={this._login} />
                {!this.state.register && <Join msg={this.state.register} _join={this._join} />}
                      {this.state.register && this.state.error && <Join msg={this.state.register} _join={this._join} />}
                      {this.state.register && this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                      {this.state.register && !this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
           </Card>
                </Col>
               </Row>  
        </Container>
</div>

         //  header={<CardTitle image={"Images/Cover.jpg"}> </CardTitle>}>


      )
{/* 


         <Row>
		   <Col s={12} m={5}>
				 <CardPanel image="/Homepage/Tag.png" className="teal lighten-4 black-text">
						<image height="200px" width="200px" src="Homepage/Tag.png" />
				 </CardPanel>
		   </Col>
	    	<Col s={12} m={7}>
        <Row>
              <Col s={12}>
                <div className="row center">
                  <Row>
                    <div className="centered"> </div>
                  </Row>
                  <Row>
                    <Col s={6}>
                      <Login _login={this._login} />
                    </Col>
                    <Col s={6}>
                      {!this.state.register && <Join msg={this.state.register} _join={this._join} />}
                      {this.state.register && this.state.error && <Join msg={this.state.register} _join={this._join} />}
                      {this.state.register && this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                      {this.state.register && !this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row> 
	     	</Col>
             </Row>
        </Container>
        </div>  
    ); */}
  }
};
};

 {/* <Row>
              <Col s={12}>
                <div className="row center">
                  <Row>
                    <div className="centered"> </div>
                  </Row>
                  <Row>
                    <Col s={6}>
                      <Login _login={this._login} />
                    </Col>
                    <Col s={6}>
                      {!this.state.register && <Join msg={this.state.register} _join={this._join} />}
                      {this.state.register && this.state.error && <Join msg={this.state.register} _join={this._join} />}
                      {this.state.register && this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                      {this.state.register && !this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row> */}







//       <div className="clearfix">
//       <Container>
//           <Card className="large red lighten-5"
//         header={<CardTitle image={"Images/homepage.jpg"}><h1>Welcome to Bao Bao Book!</h1> </CardTitle>}
//        >
//        <h5> Welcome to Bao Bao Book the Learning management system</h5>
//         <p>Experience the uniqueness of our Learning Management system where technology is no more an exclusive tool to embrace education
//         Tutors can keep track of student progress, access course calendars, connect 
//         with all resources within the network, access e-resources related to lessons and
//         a login to the Learning Management System by entering username and password</p>
//        </Card>
//           <Row>
//             <Col s={12}>
//               {/*<Link to={"/tutors/"}>To get to tutors page</Link> {/* will need to add + tutors._id*//*}*/}
//               <div className="row center">
//                 <Row>
//                   <Col s={6}>
//                     <Login _login={this._login} />
//                   </Col>
//                   <Col s={6}>
//                     {!this.state.register && 
//                         <Join msg={this.state.register} _join={this._join} />
//                     }
//                     {this.state.register && this.state.error && <Join msg={this.state.register} _join={this._join} />}
//                     {this.state.register && this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
//                     {this.state.register && !this.state.error && <Alert bstyle={this.state.bstyle}>{this.state.register}</Alert>}
//                   </Col>
//                 </Row>
//               </div>
//             </Col>
//           </Row>
//       </Container>
//       <Footer />
//       </div>


//    );
 // }
//};
//};



//  {/*<Link to={"/tutors/"}>To get to tutors page</Link> {/* will need to add + tutors._id*//*}*/}
//  <Footer />

// <h5> Welcome to Bao Bao Book the Learning management system</h5>
//         <p>Experience the uniqueness of our Learning Management system where technology is no more an exclusive tool to embrace education
//         Tutors can keep track of student progress, access course calendars, connect 
//         with all resources within the network, access e-resources related to lessons and
//         a login to the Learning Management System by entering username and password</p>

export default Homepage;
