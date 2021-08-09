/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Logo from "assets/img/brand/header_logo.png";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  state = {
    collapseClasses: "",
    collapseOpen: false,
    windowWidth: window.innerWidth,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    if (this.state.windowWidth < 992) {
      var a = (
        <NavLink
          className="nav-link-icon"
          href="subscribe"
          id="tooltip356693867" //
        >
          <i className="ni ni-bold-right d-lg-none mr-1" />
          <span className="nav-link-inner--text">Subscribe</span>
        </NavLink>
      );
    } else {
      var b = (
        <Button
          className="btn-neutral btn-icon"
          color="default"
          href="subscribe"
        >
          <span className="nav-link-inner--text ml-1">Subscribe</span>
        </Button>
      );
    }

    return (
      <>
        <header className="header-global">
          <Navbar
            style={{backgroundColor:'#AC3791 !important' , width: '100%'}}
            className="navbar-main navbar-transparent navbar-light"
            // className="navbar-main navbar-transparent navbar-light "
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={Logo} />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={Logo}
                          id="navBarLogo"
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="landing"
                      id="tooltip333589074"
                    >
                      <i className="ni ni-bold-right d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="about"
                      id="tooltip333589074"
                    >
                      <i className="ni ni-bold-right d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="contact"
                      id="tooltip184698705"
                    >
                      <i className="ni ni-bold-right d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="login"
                      id="tooltip356693867"
                    >
                      <i className="ni ni-bold-right d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Log In</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-lg-block ml-lg-4">
                    {a}
                    {b}
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
