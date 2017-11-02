import React from "react";
import { Button, Collapsible, CollapsibleItem, Col, Input, Row } from "react-materialize";
import API from "../../utils/API.js";
import TimePicker from 'material-ui/TimePicker';
import "./AddEvent.css";

class AddEvent extends React.Component {

state = {
	title: "",
	allday: false,
	start: {
		date: "",
		time: ""
	},
	end: {
		date:"",
		time: ""
	}
};

//handleinputchange
handleInputChange = event => {
	const{name,value} = event.target;
	this.setState({
		[name]:value
	})
}

//submit form
handleFormSubmit = event => {
	event.preventDefault();
	if(this.state.title && this.state.start && this.state.end) {
		API.addEvent({
			title: this.state.title,
			allDay:this.state.allDay,
			start:this.state.start,
      end: this.state.end
		}).then(res => {
			window.location= "/Tutors/:id"
			// document.write(JSON.stringify(res));
		})
	}
}

  render(){
    return(
      <div>
        <Collapsible>
          <CollapsibleItem header="Add New Event">
            <Row>
              <Input name="title" onChange={this.handleInputChange} value={this.state.title} placeholder="" s={12} label="Description" />
              <Input name="allDay" id="allDayCheck" type="checkbox" className="filled-in" onChange={this.handleInputChange} value={this.state.allDay} placeholder="" s={12} label="All Day Event?" />
						</Row>
						<Row>
							<Input name="start" onChange={this.handleInputChange} value={this.state.start.date} type="date" label="Start Date" s={6} />
							<Col s={6}>
								<TimePicker
									className="timepicker"
									hintText="Start Time"
									autoOk={true}
									onChange={this.handleInputChange}
									value={this.state.start.time}
								/>
							</Col>
						</Row>
						<Row>
							<Input name="end" onChange={this.handleInputChange} value={this.state.end.date} type="date" label="End Date" s={6} />
							<Col s={6}>
								<TimePicker
									className="timepicker"
									hintText="End Time"
									autoOk={true}
									onChange={this.handleInputChange}
									value={this.state.end.time}
								/>
							</Col>
						</Row>
            <Row>
              <Button className="blue" onClick={this.handleFormSubmit}>Add Event</Button>
            </Row>
          </CollapsibleItem>
        </Collapsible>
      </div>
    )
  } // end render function
} // end AddEvent class

export default AddEvent;
