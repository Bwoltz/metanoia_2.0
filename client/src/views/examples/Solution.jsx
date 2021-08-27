import React, { Component } from "react";
import books from "../../assets/img/icons/common/books.png";
import "./Solution.css";

class Solution extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          style={{ color: "#ac3791", textAlign: "center", paddingBottom: 20 }}
        >
          Our Solution
        </h1>
        <div class="row" style={{ paddingBottom: 50, margin: "auto" }}>
          <div class="column1">
            <h2
              style={{
                backgroundColor: "#fed359",
                maxWidth: 300,
                paddingLeft: 12,
              }}
            >
              Online Virtual Library
            </h2>
            <p style={{ fontSize: 27 }}>
              Personalized children's book recommendations<br></br> with a focus
              on books relating to social issues
            </p>
          </div>
          <div class="column2">
            <img src={books} alt="books" style={{ height: 150, width: 150 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;
