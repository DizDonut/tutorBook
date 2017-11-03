import React from 'react';
import {Footer} from 'react-materialize';

export default class footer extends React.Component {
    render(){
      return (
        
        <Footer copyrights="&Bao Bao Book 2017" className='example'>
          <div class="row">
          <div class="col l6 l12">
                <h5 class="white-text">Help Bao Bao Book to Grow</h5>
                <a href="#"><h6>Provide your feedback</h6></a>
                <p class="grey-text text-lighten-4">Thank you for providing your feedback. We appreciate the time you have taken and will actively use it to improve user experience.</p>
              </div> 
           <div class="col l10 ">
            <h5 class="white-text">Contact Us</h5>
              <a href="#"><h6>support@baobaobook.com</h6></a>
              </div> 
             </div>  
        </Footer>
      );
    }
}