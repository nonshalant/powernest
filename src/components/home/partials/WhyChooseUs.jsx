import React from "react";

const features = [
  {
    title: "Strategic Partnerships",
    description:
      "Access top venture capital firms and industry leaders to position your organization for success.",
  },
  {
    title: "Expert Teams",
    description:
      "Rely on our fundraising and business development specialists to secure funding and drive growth.",
  },
  {
    title: "Psychology-First Approach",
    description:
      "Leverage behavioral science to optimize performance, enhance leadership, and foster thriving cultures.",
  },
  {
    title: "Experienced Leadership",
    description:
      "Founded by an Organizational Psychologist with 10+ years of expertise in human behavior and dynamics.",
  },
  {
    title: "Comprehensive Results",
    description:
      "From talent acquisition to business scaling, we provide tailored, end-to-end solutions.",
  },
  {
    title: "Data-Driven Results",
    description:
      "Our evidence-based practices deliver measurable outcomes and lasting impact.",
  },
  {
    title: "Global Network",
    description:
      "Unlock global opportunities with access to top investors, partners, and talent.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h4 className="subheading">Why Choose Powernest Talent?</h4>
      <h1 className="heading">
        Elevate Your Organization <br />
        <span>with Unmatched Expertise and Insight</span>
      </h1>
      <p className="description">
        At Powernest Talent, we set ourselves apart with a unique combination of
        psychology-driven strategies, expert teams, and a global network. Here’s
        why businesses trust us to unlock their full potential:
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
