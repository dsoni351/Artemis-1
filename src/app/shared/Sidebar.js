import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center" style={{backgroundColor: "#f3f3f3", borderRadius: "42px"}}>
          <a className="sidebar-brand brand-logo" href="index.html"><img src="https://shuffle.dev/artemis-assets/logos/artemis-logo-light.svg" alt="logo" /></a>
          
        </div>
        <h6 className="" style={{color: "white",marginLeft: "15px", marginTop: "34px"}}>Main</h6>
        <ul className="nav" style={{listStyleType: "none"}}>     
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-television menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Dashboard</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' } >
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className=" mdi mdi-web menu-icon"></i>
              <span className="menu-title "><i className=" mdi mdi-web menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Discover</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } >Profiles</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } >Pages</Link></li>
              </ul>
            </Collapse>
          </li>
        
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-account-box menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Users</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } >User-Details</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-book-open-variant menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-book-open-variant menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Documents</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } >Material</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-apps menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-apps menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Appications</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } >User-Applications</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-file-outline menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-file-outline menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1">Register</Link></li>
              </ul>
            </Collapse>
          </li>
          
        
        </ul>
        <h6 className="" style={{color: "white",marginLeft: "15px", marginTop: "34px"}}>Secondary</h6>
        <ul className="nav" style={{listStyleType: "none"}}>     
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <div className="nav-link" >
              <i className="mdi mdi-internet-explorer menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-internet-explorer menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Support Center</span>
            </div>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' } >
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' }  >
              <i className=" mdi mdi-facebook-messenger menu-icon"></i>
              <span className="menu-title "><i className=" mdi mdi-facebook-messenger menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Inbox</span>
              
            </div>
          
          </li>
         
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } >
              <i className="mdi mdi-folder menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-folder menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>File Manager</span>
              
            </div>
           
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } >
              <i className="mdi mdi-book-open-variant menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-book-open-variant menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Data List</span>
            
            </div>
           
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } >
              <i className="mdi mdi-account-settings menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-account-settings menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Settings</span>
             
            </div>
           
          </li>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } >
              <i className="mdi mdi-logout menu-icon"></i>
              <span className="menu-title"><i className=" mdi mdi-logout menu-title" style={{marginLeft: "-33px", marginRight:"20px"}} ></i>Log-out</span>
              
            </div>
           
          </li>
          
         
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);