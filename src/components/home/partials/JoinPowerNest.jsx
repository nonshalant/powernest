import React from 'react'
import firstImage from "../../../images/1.jpeg"
import secondImage from "../../../images/2.jpeg"
import thirdImage from "../../../images/3.jpeg"

const JoinPowerNest = () => {
  return (
    <section className="join">
      <div className="join-row-1">
        <h1>Join Power Nest Talent</h1>
        <p>Shape the Future of Talent Solutions</p>
        <span>
          At Power Nest Talent, we transform organizations with
          psychology-driven strategies and empower individuals to reach their
          full potential. Join us on this exciting journey!
        </span>
        <button>Explore Careers</button>
      </div>
      <div className="join-row">
        <img className='first-image' src={firstImage} alt="" />
        <img className='second-image' src={secondImage} alt="image" />
        <img className='third-image' src={thirdImage} alt="image" />
      </div>
    </section>
  );
}

export default JoinPowerNest