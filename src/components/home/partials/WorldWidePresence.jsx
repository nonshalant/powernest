import React from "react";

const locations = [
  { name: "United States", top: "50%", left: "20%" },
  { name: "UK", top: "30%", left: "50%" },
  { name: "Europe", top: "35%", left: "53%" },
  { name: "UAE", top: "50%", left: "65%" },
  { name: "India", top: "55%", left: "70%" },
];

const WorldwidePresence = () => {
  return (
    <section className="worldwide-container">
      <h2 className="heading">We are Worldwide</h2>
      <div className="map">
        {locations.map((location, index) => (
          <div
            key={index}
            className="marker"
            style={{ top: location.top, left: location.left }}
          >
            <span className="pin"></span>
            <span className="label">{location.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldwidePresence;
