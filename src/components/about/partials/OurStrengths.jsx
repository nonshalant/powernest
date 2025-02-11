import React from "react";

const OurStrengths = () => {
  const strengths = [
    {
      "Senior HR Managers":
        "Industry-specific knowledge to address unique workforce challenges",
    },
    {
      "Elite Fundraising Specialists":
        "Strong connections with venture capital firms",
    },
    {
      "Business Development Managers":
        "Industry-specific knowledge to address unique workforce challenges",
    },
    {
      "Talent Acquisition Specialists": "Finding and securing top-tier talent",
    },
    {
      "Learning & Development Experts":
        "Upskilling and professional growth programs",
    },
    {
      "Performance Management Specialists":
        "Driving excellence through evaluation and feedback",
    },
    { "Compensation & Benefits Analysts": "Designing competitive packages" },
    {
      "Employee Relations Specialists":
        "Building harmonious workplace environments",
    },
    {
      "HR Analytics Experts":
        "Data-driven insights for strategic decision-making",
    },
    {
      "Organizational Development Professionals":
        "Enhancing structures and processes for growth",
    },
  ];
  return (
    <section className="strengths">
      <div className="stengths-container">
        <div className="strengths-headline">
          <h1>Our Team Strength</h1>
          <h2>
            Our powerhouse team combines diverse expertise to address every
            aspect of talent management and organizational growth. Our
            specialists include:
          </h2>
        </div>
        <div className="strength">
          <ol>
            {strengths.map((strength) => (
              <React.Fragment>
                <li>{strength}</li>
                <span></span>
              </React.Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
