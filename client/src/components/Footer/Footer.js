import React from 'react';
import Footer from "react-materialize";


<Footer copyrights="Bao Bao; 2017 Copyright Text"
  moreLinks={
    <a className="grey-text text-lighten-3 right" href="#!">More Links</a>
  }
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Homepage</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Tutor Page</a></li>
    </ul>
  }
  className='example'
>
    <h5 className="white-text">Footer Content</h5>
    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>;
export default Footer;