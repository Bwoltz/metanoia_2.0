import React, { Component } from "react";
import "./Problem.css";
import accessibility from "../../assets/img/icons/common/accessibility.png";
import balance from "../../assets/img/icons/common/balance.png";
import knowledge from "../../assets/img/icons/common/confusion.png";

class Problem extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          style={{ color: "#ac3791", textAlign: "center", paddingBottom: 20 }}
        >
          The Problem
        </h1>
        <div class="row">
          <div class="column">
            <h2>Inaccessibility</h2>
            <img
              src={accessibility}
              alt="accessibility"
              style={{ height: 110, width: 110 }}
            />
          </div>
          <div class="column">
            <h2>PLACEHOLDER</h2>
            <img
              src={balance}
              alt="inequality"
              style={{ height: 110, width: 110 }}
            />
          </div>
          <div class="column">
            <h2>Limited Knowledge</h2>
            <img
              src={knowledge}
              alt="lack of knowledge"
              style={{ height: 110, width: 110 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Problem;
