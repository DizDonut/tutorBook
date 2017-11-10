import React from "react";
import { Button, Collapsible, CollapsibleItem, Col, Input, Row } from "react-materialize";
import API from "../../utils/API.js";
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
			}
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
}handleStartTime(event, time){
	this.setState({
		startTime: time
	})
}handleEndTime(event, time){
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
				var startString = "new Date(";
				startString += momentStartDate.year()+", "+(momentStartDate.month()+1)+", "+momentStartDate.date()+", "+momentStartTime.hours()+", "+momentStartTime.minutes()+", 0)";
				var endString = "new Date("+momentEndDate.year()+", "+(momentEndDate.month()+1)+", "+momentEndDate.date()+", "+momentEndTime.hours()+", "+momentEndTime.minutes()+"0)";
				var tz = moment.tz.guess();
				//alert("startString: " + startString);
				var event = {
					title: this.state.title,
					allday:this.state.allday,
					start:startString,
					end: endString
				};

				//alert("Add Event: " + JSON.stringify(event));
				API.addEvent(event, query).then(res => {
					window.location= "/Tutors";
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
              <Input name="title" onChange={this.handleInputChange} value={this.state.title} placeholder="" s={12} label="Description" />
              <Input name="allDay" id="allDayCheck" type="checkbox" className="filled-in" onChange={this.handleInputChange} value={this.state.allday} placeholder="" s={12} label="All Day Event?" />
						</Row>
						<Row>
							<Input name="startDate" onChange={this.handleStartDate} value={this.state.startDate} type="date" label="Start Date" s={6} />
							<Col s={6}>
								<TimePicker
									className="timepicker"
									hintText="Start Time"
									autoOk={true}
									onChange={this.handleStartTime}
									value={this.state.startTime}
								/>
							</Col>
						</Row>
						<Row>
							<Input name="end" onChange={this.handleEndDate} value={this.state.endDate} type="date" label="End Date" s={6} />
							<Col s={6}>
								<TimePicker
									className="timepicker"
									hintText="End Time"
									autoOk={true}
									onChange={this.handleEndTime}
									value={this.state.endTime}
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
