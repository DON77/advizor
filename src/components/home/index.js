import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [
        {
          workTitle: 'Senior Systems Engineer',
          workDate: 'june 2017',
          workName: 'Qualcomm',
          workAddress: 'Santa Clara, California',
          workDescription: 'I manage the junior systems engineering team.'
        },
        {
          workTitle: 'Senior Systems intern',
          workDate: 'june 2016 - August 2016',
          workName: 'Qualcomm',
          workAddress: 'Santa Clara, California',
          workDescription: 'I worked in the XYZ Team at Qualcomm to implement ABC.'
        }
      ],
      education: [
        {
          educationTitle: 'Bachelor of Secience, Physics',
          educationDate: 'june 2017',
          educationAddress: 'Santa Clara University',
          educationDescription: 'Physics Student Association, Sigma Sigma Sigma, Student Enterpreneurs, Student Advisory Board.'
        }
      ]
    }
  }

  renderWork(item, i) {
    return (
      <div key={i} className="work">
        <div className="info">
          <span className="work-title">{item.workTitle}</span>
          <span className="work-date">{item.workDate}</span>
          <div className="work-name">{item.workName}</div>
          <div className="work-address">{item.workAddress}</div>
          <div className="work-description">{item.workDescription}</div>
        </div>
        <div className="workEdit">
          <span className="edit">Edit</span>
        </div>
      </div>
    )
  }
  renderEducation(item, i) {
    return (
      <div key={i} className="education">
        <div className="info">
          <span className="education-title">{item.educationTitle}</span>
          <span className="education-date">{item.educationDate}</span>
          <div className="education-address">{item.educationAddress}</div>
          <div className="education-description">{item.educationDescription}</div>
        </div>
        <div className="educationEdit">
          <span className="edit">Edit</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="myAccount">
        <div className="myAccountContainer">
          <div className="profile">
            <div className="profile-container">
              <div className="pic">
                <img src="./images/pic.png" alt=""/>
              </div>
              <div className="name">Aaron Melgar</div>
              <div className="aboutPerson">
                <span className="introduce">Let me introduce myself</span>
                <span className="edit">Edit</span>
                <div className="text">Write a quick summary about yourself hear.</div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="box">
              <span className="title">Relevant Experience</span>
              <span className="edit">Edit</span>
              <div className="description">Write a quick summary about yourself hear.</div>
              <input type="text" placeholder="Add interests" className="addInterests"/>
              <div className="interests">
                <span className="interest">#Semiconductor</span>
                <span className="interest">#ProductManagment</span>
              </div>
            </div>
            <div className="box">
              <span className="title">Work Experience</span>
              {this.state.work.map(this.renderWork)}
              <div className="addNew">+ Add Experience</div>
            </div>
            <div className="box">
              <span className="title">Education</span>
              {this.state.education.map(this.renderEducation)}
              <div className="addNew">+ Add Education</div>
            </div>
            <div className="box">
              <div className="saveBox clearfix">
                <span className="title">Account Settings</span>
                <div className="pass email">
                  <div className="name">Email Address:</div>
                  <div className="inputName email">amelgar@scu.edu</div>
                </div>
                <div className="pass current-password">
                  <div className="name">Current Password:</div>
                  <div className="inputName">
                    <input type="text"/>
                  </div>
                </div>
                <div className="pass new-password">
                  <div className="name">New Password:</div>
                  <div className="inputName">
                    <input type="text"/>
                  </div>
                </div>
                <div className="pass confirm-new-password">
                  <div className="name">Confirm New Password:</div>
                  <div className="inputName">
                    <input type="text"/>
                  </div>
                </div>
              </div>
              <div className="savePass">
                <input type="submit" value="Change Password" />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;