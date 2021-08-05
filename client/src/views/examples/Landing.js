import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import "./Landing.css";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  Modal,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

// images
import Banner from "assets/img/theme/anotherbanner.svg";
import NewsletterImage from "assets/img/theme/newsletter.png";
import AccessibilityIcon from "assets/img/icons/accessibility_icon.png";
import ImpactIcon from "assets/img/icons/impact_icon.png";
import BiasPreventionIcon from "assets/img/icons/bias_prevention_icon.png";
import Testimonial1 from "assets/img/theme/testimonial1.svg";
import Testimonial2 from "assets/img/theme/testimonial2.svg";
import Testimonial3 from "assets/img/theme/testimonial3.svg";

import Event from './EventTracking';

const items = [
  {
    src: Testimonial1,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: Testimonial2,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: Testimonial3,
    altText: "",
    caption: "",
    header: "",
  },
];

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  state = {
    comingSoonModal: false,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300">
              <div className="shape shape-style-1 shape-default cont">
                <img alt="..." src={Banner} className="bannerStyles" />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">Metanoia </h1>
                      <p className="lead text-white">
                        The digital library that inspires conversations
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="register"
                          onClick={()=> Event("Button", "Get Started Button", "Page Transfer")}
                        >
                          <span className="btn-inner--text">Get Started</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
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
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Identity
                          </h6>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Pre-K
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              K-2
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              G3-5
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href=""
                            onClick={() => {
                              this.toggleModal("comingSoonModal")
                              Event("Button", "Identity Explore", "Modal")
                              }}
                          >
                            Explore
                          </Button>
                          <Modal
                            className="modal-dialog-centered modal-primary"
                            contentClassName="bg-gradient-primary"
                            isOpen={this.state.comingSoonModal}
                            toggle={() => this.toggleModal("comingSoonModal")}
                          >
                            <div className="modal-header">
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("comingSoonModal")
                                }
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="py-3 text-center">
                                <h2 className="heading">
                                  Coming soon! Check back for more updates!
                                </h2>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="text-white ml-auto"
                                color="link"
                                data-dismiss="modal"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("comingSoonModal")
                                }
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Diversity
                          </h6>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Pre-K
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              K-2
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              G3-5
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href=""
                            onClick={() =>{
                              this.toggleModal("comingSoonModal_1")
                              Event("Button", "Diversity Explore", "Modal")
                            }}
                          >
                            Explore
                          </Button>
                          <Modal
                            className="modal-dialog-centered modal-success"
                            contentClassName="bg-gradient-success"
                            isOpen={this.state.comingSoonModal_1}
                            toggle={() => this.toggleModal("comingSoonModal_1")}
                          >
                            <div className="modal-header">
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("comingSoonModal_1")
                                }
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="py-3 text-center">
                                <h2 className="heading">
                                  Coming soon! Check back for more updates!
                                </h2>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="text-white ml-auto"
                                color="link"
                                data-dismiss="modal"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("comingSoonModal_1")
                                }
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Gender
                          </h6>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Pre-K
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              K-2
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              G3-5
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href=""
                            onClick={() =>{
                              this.toggleModal("comingSoonModal_2")
                              Event("Button", "Gender Explore", "Modal")

                            }}
                          >
                            Explore
                          </Button>
                          <Modal
                            className="modal-dialog-centered modal-danger"
                            contentClassName="bg-gradient-danger"
                            isOpen={this.state.comingSoonModal_2}
                            toggle={() => this.toggleModal("comingSoonModal_2")}
                          >
                            <div className="modal-header">
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("comingSoonModal_2")
                                }
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="py-3 text-center">
                                <h2 className="heading">
                                  Coming soon! Check back for more updates!
                                </h2>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="text-white ml-auto"
                                color="link"
                                data-dismiss="modal"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("comingSoonModal_2")
                                }
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={NewsletterImage}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Sign up for our personalized newsletter!</h3>
                    <p>
                      A curated book recommendations list every month based on
                      your preferences, just for you!
                    </p>
                    <Button
                      className="btn-icon"
                      color="success"
                      type="button"
                      href="subscribe"
                      onClick={Event("Button", "Sign Up For Newsletter", "Newsletter")}
                    >
                      <span className="nav-link-inner--text ml-1">
                        Sign Up Here
                      </span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">What We Believe In</h2>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={AccessibilityIcon}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Accessibility</span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={ImpactIcon}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Social Impact</span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-4 mb-lg-0" md="4">
                  {/* maybe add lg="3" md="6"?? */}
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={BiasPreventionIcon}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Bias Prevention</span>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Testimonials</h2>
                  <p className="lead text-white">
                    Read below for what our customers had to say.
                  </p>
                </Col>
              </Row>
              {/* <Row className="row-grid mt-5"> */}
              <UncontrolledCarousel items={items} />
              {/* </Row> */}
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to learn more?</h4>
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
                            placeholder="Your name"
                            type="text"
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
                            placeholder="Email address"
                            type="email"
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
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
