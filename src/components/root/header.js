import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="header">
        <div className="header-ontainer">
          <div className="logo">
            <img src="./images/logo.png" alt="logo"/>
          </div>
          <div className="menu">
            <ul>
              <li>Log Out</li>
              <li>My Account</li>
              <li>View Discussions</li>
              <li>FAQ's</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
