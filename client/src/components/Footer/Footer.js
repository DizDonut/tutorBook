import React from 'react';
import {Footer} from 'react-materialize';

export default class footer extends React.Component {
    render(){
      return (
        
        <Footer copyrights="Bao Bao Book 2017" className='example'>
          <div className="row">
          <div className="col l6 l12">
                <h5 className="white-text">Help Bao Bao Book to Grow</h5>
                <a href="https://github.com/DizDonut/tutorBook" target="blank"><h6>Provide your feedback</h6></a>
                <p className="grey-text text-lighten-4">Thank you for providing your feedback. We appreciate the time you have taken and will actively use it to improve user experience.</p>
              </div> 
           <div className="col l10 ">
            <h5 className="white-text">Contact Us</h5>
            <a href="https://github.com/DizDonut/tutorBook" target="blank"><h6>support@baobaobook.com</h6></a>
              </div> 
             </div>  
        </Footer>
      );
    }
}