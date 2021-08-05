import React from "react";
import "./About.css";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/CardsFooter.js";

// images
import Banner from "assets/img/theme/website-image.png";
import AsthaImage from "assets/img/theme/astha.JPG";
import JessImage from "assets/img/theme/jessica.png";
import TanveeImage from "assets/img/theme/tanvee.JPG";
import JoyceImage from "assets/img/theme/joyce.jpg";
import CassidyImage from "assets/img/theme/cassidy.png";
import BrettImage from "assets/img/theme/brett.png";

class About extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-200">
              <div className="shape shape-style-1 shape-default cont">
                <img alt="..." src={Banner} className="bannerStyles2" />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="0">
                      <h1 id="heading" className="display-3 text-white">
                        About Us{" "}
                      </h1>
                      <p className="lead text-white" style={{ margin: 15 }}>
                        Metanoia is an upcoming EdTech startup that seeks to put
                        social issues at the forefront of children’s lives
                        through our virtual interactive library. Our website
                        bridges the communication gap between parents/teachers
                        and students by tailoring personalized book
                        recommendations that foster meaningful discussions. K-5
                        students will be able to enrich their knowledge whenever
                        and wherever they go!
                      </p>
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
            {/* Founder Intros */}
            <section style={{backgroundColor: '#FCFAD9'}} className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 id="heading" className="display-3">Our Team</h2>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-4 mb-lg-0" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={AsthaImage}
                      style={{ width: "300px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Astha Rai</span>
                      </h5>
                      <h6 className="title">
                        <span className="d-block mb-10">Co-Founder</span>
                      </h6>
                    </div>
                    </div>
                  </Col>
                  <Col className="mb-4 mb-lg-0" md="4">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={JessImage}
                        style={{ width: "300px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Jessica Li</span>
                        </h5>
                        <h6 className="title">
                          <span className="d-block mb-10">Co-Founder</span>
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-4 mb-lg-0" md="4">
                    {/* maybe add lg="3" md="6"?? */}
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={TanveeImage}
                        style={{ width: "300px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Tanvee Joshi</span>
                        </h5>
                        <h6 className="title">
                          <span className="d-block mb-10">Co-Founder</span>
                        </h6>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-4 mb-lg-0" md="4">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={CassidyImage}
                        style={{ width: "300px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Cassidy Cheng</span>
                        </h5>
                        <h6 className="title">
                          <span className="d-block mb-10">
                            Head of BD/Marketing
                          </span>
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-4 mb-lg-0" md="4">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={JoyceImage}
                        style={{ width: "300px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Joyce Mok</span>
                        </h5>
                        <h6 className="title">
                          <span className="d-block mb-10">Head of UI/UX</span>
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-4 mb-lg-0" md="4">
                    {/* maybe add lg="3" md="6"?? */}
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={BrettImage}
                        style={{ width: "300px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Brett Woltz</span>
                        </h5>
                        <h6 className="title">
                          <span className="d-block mb-10">
                            Head of Web + Software Development
                          </span>
                        </h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default About;
