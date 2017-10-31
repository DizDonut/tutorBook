import React from "react";
import { Card, CardTitle, Col } from "react-materialize";

const TutorCard = props => {
  return(
    <Card className="medium"
      header={
              <CardTitle image={props.header}>
                  {props.title}
              </CardTitle>
              }>
    </Card>
  );

} //end TutorCard const

export default TutorCard;
