import React from "react";
import { Button, Collapsible, CollapsibleItem, Col, Input, Row } from "react-materialize";
import API from "../../utils/API.js";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import TimePicker from 'material-ui/TimePicker';
import "./AddEvent.css";
import moment from "moment";

class AddEvent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
			allday: false,
			startDate: "",
			startTime: "",
			endDate: "",
			endTime: "",
			start: {
				date: "",
				time: ""
			},
			end: {
				date:"",
				time: ""
			},
			redirectTo: ""
		};
		this.handleStartDate = this.handleStartDate.bind(this);
		this.handleEndDate = this.handleEndDate.bind(this);
		this.handleStartTime = this.handleStartTime.bind(this);
		this.handleEndTime = this.handleEndTime.bind(this);

	}

//handleinputchange
handleInputChange = event => {
	const{name,value} = event.target;
	this.setState({
		[name]:value
	})
}

handleStartDate(event, date){
	this.setState({
		startDate: date
	})
}
handleEndDate(event, date){
	this.setState({
		endDate: date
	})
}

handleStartTime(event, time){
	this.setState({
		startTime: time
	})
}

handleEndTime(event, time){
	this.setState({
		endTime: time
	})
}

//submit form
handleFormSubmit = event => {
	event.preventDefault();

	if(this.state.title && this.state.startDate) {
		const tutorSession = JSON.parse(localStorage.getItem("tutor"))
    if (tutorSession) {
      const query = tutorSession.id;
			API.getTutor(query)
			.then(res => {
				//Create datetime objects
				let momentStartTime = moment(this.state.startTime);
				let momentStartDate = moment(this.state.startDate);
				let start = moment({
					year: momentStartDate.year(),
					month: momentStartDate.month(),
					day: momentStartDate.date(),
					hour: momentStartTime.hours(),
					minute: momentStartTime.minutes()
				});
				let momentEndTime = moment(this.state.endTime);
				let momentEndDate = moment(this.state.endDate);
				let end = moment({
					year: momentEndDate.year(),
					month: momentEndDate.month(),
					day: momentEndDate.date(),
					hour: momentEndTime.hours(),
					minute: momentEndTime.minutes()
				});
				//new Date(2017, 9, 4)
				//alert("startString: " + startString);
				var event = {
					title: this.state.title,
					allDay:this.state.allday,
					start:start,
					end: end
				};

				//alert("Add Event: " + JSON.stringify(event));
				API.addEvent(event, query).then((res) => {
					//alert(JSON.stringify(res));
					this.setState(
					{
						redirectTo: "/Tutors",
						title: "",
						allday: false,
						startDate: "",
						startTime: "",
						endDate: "",
						endTime: ""
					});
					this.props._tutorEventUpdate();

					//window.location("/Tutors");
					//alert("set state");
					// document.write(JSON.stringify(res));
				})
			})

		}
	}
}

  render(){
		  return(
      <div>
        <Collapsible>
          <CollapsibleItem header="Add New Event">
            <Row>
							<Col s={12}>
								<TextField
									className="event-input"
								 	name="title"
									onChange={this.handleInputChange}
									value={this.state.title}
									floatingLabelText="Description" />
							</Col>
						</Row>
						<Row>
							<Col s={6}>
								<DatePicker
									fullWidth={true}
									hintText="Start Date"
									openToYearSelection={false}
									name="startDate"
									onChange={this.handleStartDate}
									value={this.state.startDate}/>
							</Col>
							<Col s={6}>
								<TimePicker
									hintText="Start Time"
									autoOk={true}
									onChange={this.handleStartTime}
									value={this.state.startTime}
									textFieldStyle={{
										width: "100%",
									}}
								/>
							</Col>
						</Row>
						<Row>
							<Col s={6}>
								<DatePicker
									fullWidth={true}
									hintText="End Date"
									openToYearSelection={false}
									name="endDate"
									onChange={this.handleEndDate}
									value={this.state.endDate}/>
							</Col>
							<Col s={6}>
								<TimePicker
									hintText="End Time"
									autoOk={true}
									onChange={this.handleEndTime}
									value={this.state.endTime}
									textFieldStyle={{
										width: "100%",
									}}
								/>
							</Col>
							<Input name="allDay" id="allDayCheck" type="checkbox" className="filled-in" onChange={this.handleInputChange} value={this.state.allday} placeholder="" s={12} label="All Day Event?" />
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
