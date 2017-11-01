import React from "react";
import { Card, CardTitle, Col, Container, Row } from "react-materialize";
import "./TutorCard.css";

// import dependencies for calendar
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "../Events";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";

// Setup localizer using moment !!!important
BigCalendar.momentLocalizer(moment);

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const TutorCard = props => {
  return(
    <div>
      <Row>
        <Col m={6}>
          <Card className="large"
            header={
                  <CardTitle image={props.header}>
                    {props.title}
                  </CardTitle>
                  }>
          </Card>
        </Col>
        <Col m={6}>
          <BigCalendar
            {...this.props}
            events={events}
            step={60}
            defaultDate={new Date(2017, 9, 1)}
          />
        </Col>
      </Row>
    </div>
  );

} //end TutorCard const

export default TutorCard;
