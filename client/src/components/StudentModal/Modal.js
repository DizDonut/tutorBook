import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Tabs, Tab } from "material-ui/Tabs";
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from "react-swipeable-views/";
import "./Modal.css";

class StudentDialog extends React.Component {

    state = {
      open: false,
      slideIndex: 0
    };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  handleFamily = (fam) => {

  }

  render(){
    const actions = [
      <FlatButton
        label="Go Back"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return(
      <div>
        <RaisedButton id="modal-btn" label="See Student" onClick={this.handleOpen} />
        <Dialog
          title="Student Details"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Notes" value={0} />
            <Tab label="Likes" value={1} />
            <Tab label="Family" value={2} />
            <Tab label="Location" value={3} />
            <Tab label="Age/Birthday" value={4} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              {this.props.notes}
            </div>
            <div>
              {this.props.likes}
            </div>
            <div>
              <p>Mother: {this.props.family.mom ? `Yup` : `None`}</p>
              <p>Father: {this.props.family.dad ? `Yup` : `None`}</p>
              <p>Sister: {this.props.family.sister ? `Yup` : `None`}</p>
              <p>Brother: {this.props.family.brother ? `Yup` : `None`}</p>
            </div>
            <div>
              <p>Location: {this.props.location}</p>
            </div>
            <div>
              <p>Age: {this.props.age}</p>
              <p>Birthday: {this.props.birthday}</p>
            </div>
          </SwipeableViews>
        </Dialog>
      </div>
    )
  }
} // end const for StudenDialog

export default StudentDialog;
