import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/CardsFooter.js";

import "./Contact.css";

// images and icons
import Banner from "assets/img/theme/banner.png";

// css
import './Contact.css'; 

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  updateName = async (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  updateEmail = async (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updateMessage = async (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    console.log("Button Pressed!");
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.email,
      }),
    });
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default cont">
                <img alt="..." src={Banner} className="bannerStyles3" />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="0">
                      <h1 id="heading" className="display-3 text">
                        Contact Us{" "}
                      </h1>
                      {/* <p className="lead text-white">
                        Status: Pending. Check back here for updates!
                      </p> */}
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section style={{backgroundColor: '#FCFAD9'}} className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-left">
                <Col className="order-md-1  mt--200" md="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 id="heading" className="mb-1">Want to learn more?</h4>
                      <p className="mt-0">
                        We care about your input and experiences.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={this.state.name}
                            placeholder="Your name"
                            type="text"
                            onChange={(e) => this.updateName(e)}
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            value={this.state.email}
                            placeholder="Email address"
                            type="email"
                            onChange={(e) => this.updateEmail(e)}
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          value={this.message}
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          onChange={(e) => this.updateMessage(e)}
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          blocks
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                          onClick={this.onSubmit}
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="order-md-2" xs="1"></Col>
                <Col className="order-md-3 px-10" md="3">
                  <div id="heading">
                    <br></br>
                    <br></br>
                    <h4>
                      Email:
                      <span> </span>
                      <a href="metanoiabooks.co@gmail.com" target="blank">
                        metanoiabooks.co@gmail.com
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://www.linkedin.com/company/metanoiabooks/"
                        target="blank"
                      >
                        Linkedin
                      </a>
                    </h4>
                    <h4>
                      <a
                        href="https://www.facebook.com/MetanoiaLibrary/"
                        target="blank"
                      >
                        Facebook
                      </a>
                    </h4>
                    {/* <h4>
                                  Twitter: Coming soon!
                    </h4> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Contact;
