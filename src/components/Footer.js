import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
      <div className="main-footer">
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>
                Search photos using the Unsplash API.
              </h4>
                <a className="creator" href="https://www.linkedin.com/in/jordanchu1995/"><i className="fa fa-linkedin-square fa-2x"></i></a>
                <a class="creator "href="http://jordanchu.xyz"><i class="fa fa-code fa-2x"></i></a>
                <a class="creator "href="https://github.com/idkjay"><i class="fa fa-github-square fa-2x"></i></a>
            </div>
          </div>
          <div className="row">
            <p className="col-sm">
              &copy;
              <a className="name" href="http://jordanchu.xyz/">Jordan Chu</a> | {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;