import React from "react";

const Talent = () => {
  return (
    <footer className="talent">
      <div className="talent-container">
        {/* Left Section - Company Info & Contact */}
        <div className="talent-column">
          <h1>Powernest Talent</h1>
          <p>
            Transform your organization through psychology-driven talent
            solutions.
          </p>

          <h2>Contact</h2>
          <p>
            Ready to transform your organization or career? Contact us for a
            consultation.
          </p>
          <ul>
            <li>info@powernesttalent.com</li>
            <li>hr@powernesttalent.com</li>
          </ul>
        </div>

        <div className="talent-column">
          <div>
            <h3 className="highlight">Services</h3>
            <ul>
              <li>Comprehensive Services</li>
              <li>Strategic Advisory Services</li>
              <li>Psychological Services</li>
            </ul>
          </div>
          <div>
            <h3 className="highlight">Solutions</h3>
            <ul>
              <li>Business Development Solutions</li>
              <li>Core HR Solutions</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Company Info */}
        <div className="talent-column">
          <h3 className="highlight">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="talent-footer">
        <p>Copyright © 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Talent;
