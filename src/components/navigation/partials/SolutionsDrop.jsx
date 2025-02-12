import React from 'react'
import sixthImage from "../../../images/6.jpeg"

const SolutionsDrop = () => {
  return (
    <section className="solutions">
      <div className="solutions-container">
        <div className="solutions-row">
          <h2>Solution</h2>
          <p>Business Development Solutions</p>
          <p>Core HR Solutions</p>
        </div>
        <div className="solutions-row">
          <img src={sixthImage} alt="image" />
        </div>
        <div className="solutions-row solution-flex">
          <h2>Power Nest Benifits For Employees</h2>
          <ul>
            <li>Access to pre-screened, psychologically assessed talent</li>
            <li>Direct connection to venture capital opportunities</li>
            <li>Expert business development support</li>
            <li>Reduced hiring risks through scientific assessment</li>
            <li>Improved employee retention</li>
            <li>Enhanced team performance</li>
            <li>Better employee well-being</li>
            <li>Strategic business growth support</li>
            <li>Comprehensive talent development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SolutionsDrop