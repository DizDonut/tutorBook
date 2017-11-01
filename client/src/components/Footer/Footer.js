import React from 'react';
import {Footer} from 'react-materialize';

export default class footer extends React.Component {
    render(){
      return (

        <Footer copyrights="&Bao Bao Book 2017"  moreLinks={ <a className="grey-text text-lighten-4 right"
        href="#!">More Links</a>}
              links={
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                </ul>
              }
              className='blue lighten-4'>
          <h3 className="white-text">Footer Content</h3>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
      );
    }
}
