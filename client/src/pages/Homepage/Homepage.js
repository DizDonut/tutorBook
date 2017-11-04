import React, { Component } from "react";
import Login from "../../components/Login";
import Join from "../../components/Join";
import Footer from "../../components/Footer";
import { Card, CardTitle, Container, Col, Row } from "react-materialize";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'

class Homepage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      tutor: null,
      redirectTo: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }

  handleInputChange(e) {
    this.setState({ tutor: e.target.value });
  }

  _logout(event) {
    API.logout().then(res => {
      console.log(res)
      if (res.status === 200) {
        // update the state
        this.setState({
          loggedIn: false,
          tutor: null
        })
      }
    })
  }

  _login(username, password) {
    API.login({ username, password }).then(res => {
      console.log(res)
      if (res.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          tutor: res.data,
          redirectTo: "/Tutors"
        })
      }
    })
  }


  render(){
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
      <div>
      <Container>
        <Card className="large light-blue lighten-5"
          header={<CardTitle image={"Images/homepage.jpg"}><h1>Welcome to Bao Bao Book!</h1> </CardTitle>}>
          <h5>Lorem ipsum dolor sit amet, integer quis vulputate, vel purus nullam consectetuer, nullam interdum dapibus, amet sed sagittis tincidunt libero eros amet, quam mattis. Sem orci arcu ipsum vitae consectetuer lorem. Et arcu vitae habitant, leo ut quam condimentum mollis, augue enim ultrices,Lorem ipsum    </h5>
        </Card>
          <Row>
            <Col s={12}>
              {/*<Link to={"/tutors/"}>To get to tutors page</Link> {/* will need to add + tutors._id*//*}*/}
              <div className="row center">
                <Row>
                  <Col s={6}>
                      <Login _login={this._login} />
                  </Col>
                  <Col s={6}>
                    <Join />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
      </Container>
      <Footer />
      </div>
    );
  }
};
};


export default Homepage;
