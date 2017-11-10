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
            <Tab label="Age/Birthday" value={3} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              notes={this.props.notes}
            </div>
            <div>
              likes={this.props.likes}
            </div>
            <div>
              family={this.props.family}
            </div>
            <div>
              location={this.props.location}
            </div>
          </SwipeableViews>
        </Dialog>
      </div>
    )
  }
} // end const for StudenDialog

export default StudentDialog;
