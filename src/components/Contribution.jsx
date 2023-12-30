import React from "react";
import "./Contribution.css";

function Contribution() {
  return (
    <div className="middle-content">
      <div className="contribution">
        <h2 className="main-heading">Our Contribution</h2>
        <p>
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>
      <div className="chart">
        <div className="chart-content">
          <h1>5M</h1>
          <p className="c-description">Daily User Engagements</p>
        </div>
        <div className="chart-content">
          <h1>$500K</h1>
          <p className="c-description">Revenue Surge for any Platform</p>
        </div>
        <div className="chart-content">
          <h1>10X</h1>
          <p className="c-description">ROAS on all our marketing campaigns</p>
        </div>
      </div>
    </div>
  );
}

export default Contribution;
