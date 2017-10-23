import React from "react";
import "./Footer.css";

const Footer = () =>


<footer copyrights="BaoBaoBook 2017"
moreLinks={
    <a className="white-text text-lighten-3" href="#!">More Links</a>
}
links={
    <ul>
        <li><a className="white-text text-lighten-3" href="#!">Link 1</a></li>
        <li><a className="white-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a className="white-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a className="white-text text-lighten-3" href="#!">Link 4</a></li>
    </ul>
}
className='example'
>
    <h5 className="white-text">Footer Content</h5>
    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</footer>;
  
    export default Footer;