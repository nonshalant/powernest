import React from "react";

const Hero = () => {
  const handleSubmit = () => {};

  return (
    <section>
      <div className="contact-hero">
        <div className="">
          <h1>Get in Touch with Power Nest Talent</h1>
          <div className="">
            <h3>Chat to us</h3>
            <p>Our friendly tea is here to help you</p>
            <a href="mailto: hr@powernesttalent.com"> hr@powernesttalent.com</a>
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="row-inner">
                <label htmlFor="first-name"></label>
                <input type="text" name="first-name" id="first-name" />
              </div>
              <div className="">
                <label htmlFor="last-name"></label>
                <input type="text" name="last-name" id="last-name" />
              </div>
            </div>
            <div className="row">
              <div className="row-inner">
                <label htmlFor="first-name"></label>
                <input type="text" name="first-name" id="first-name" />
              </div>
              <div className="">
                <label htmlFor="last-name"></label>
                <input type="text" name="last-name" id="last-name" />
              </div>
            </div>
            <div className="row">
              <div className="row-inner">
                <label htmlFor="first-name"></label>
                <input type="text" name="first-name" id="first-name" />
              </div>
              <div className="">
                <label htmlFor="last-name"></label>
                <input type="text" name="last-name" id="last-name" />
              </div>
            </div>
            <div className="row">
              <div className="row-inner">
                <label htmlFor="first-name"></label>
                <input type="text" name="first-name" id="first-name" />
              </div>
              <div className="">
                <label htmlFor="last-name"></label>
                <input type="text" name="last-name" id="last-name" />
              </div>
            </div>
            <div className="row2">
              <label htmlFor="">What are you looking for</label>
              <input type="text" name="" id="" />
            </div>
            <div className="row3">
              <label htmlFor="">How can we help?</label>
              <textarea name="" id=""></textarea>
            </div>
            <button>Connect wit Powernest</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
