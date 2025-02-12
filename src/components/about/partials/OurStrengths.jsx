import React from "react";

const OurStrengths = () => {
const specialists = [
  {
    key: "Senior HR Managers",
    value: "Industry-specific knowledge to address unique workforce challenges",
  },
  {
    key: "Elite Fundraising Specialists",
    value: "Strong connections with venture capital firms",
  },
  {
    key: "Business Development Managers",
    value: "Industry-specific knowledge to address unique workforce challenges",
  },
  {
    key: "Talent Acquisition Specialists",
    value: "Finding and securing top-tier talent",
  },
  {
    key: "Learning & Development Experts",
    value: "Upskilling and professional growth programs",
  },
  {
    key: "Performance Management Specialists",
    value: "Driving excellence through evaluation and feedback",
  },
  {
    key: "Compensation & Benefits Analysts",
    value: "Designing competitive packages",
  },
  {
    key: "Employee Relations Specialists",
    value: "Building harmonious workplace environments",
  },
  {
    key: "HR Analytics Experts",
    value: "Data-driven insights for strategic decision-making",
  },
  {
    key: "Organizational Development Professionals",
    value: "Enhancing structures and processes for growth",
  },
];
  return (
    <section className="strengths">
      <div className="stengths-container">
        <div className="strengths-headline">
          <h1>Our Team <br /> Strength</h1>
          <h2>
            Our powerhouse team combines diverse expertise to address every
            aspect of talent management and organizational growth. Our
            specialists include:
          </h2>
        </div>
        <div className="strength">
          <ol>
            {specialists.map((specialist) => (
              <div className="strength-container">
                <li>{specialist.key}</li>
                <span>{specialist.value}</span>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
