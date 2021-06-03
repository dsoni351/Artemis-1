import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

import SearchIcon from '@material-ui/icons/Search';

class Navbar extends Component {
 
  render () {  
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" >
            <i className="mdi mdi-menu"></i>
          </button>
          <SearchIcon style={{cursor: "pointer"}}></SearchIcon>
          <form className="ml-auto search-form d-none d-md-block" action="#">
            <div className="form-group">
              <input type="search" className="form-control" placeholder="Type to search" />
            </div>
            </form>
          <ul className="navbar-nav navbar-nav-right">

          <li className="nav-item  nav-profile border-0 pl-4">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count bg-success">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item py-3 d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                      <p className="font-weight-light small-text mb-0"> Just now </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                      <p className="font-weight-light small-text mb-0"> Private message </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                      <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count">7</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                    <span className="badge badge-pill badge-primary">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face10.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face12.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled</p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                      <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            
            
          

            
            <li className="nav-item   border-0">
              <Dropdown >
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <div  style={{display: "inline-block", marginRight: "-18px"}}>
                  <div style={{display: "inline-block", marginRight: "7px", marginLeft: "7px"}}>
                    <p style={{marginBottom: "7px", marginTop: "21px"}}>Thomas Brown</p>
                    <p>Developer</p>
                  </div>
                  <img className="img-xs rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="Profile" style={{marginBottom: "20px", marginRight: "24px", marginLeft: "3px"}}/> 
                  </div>
                  
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3" style={{margin: "-5px"}}>
                  
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                  Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                  Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
