import "./loader.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="sectionHeading">
        <h1>Contact Me</h1>
      </div>
      <div id="contactContainer">
        <div>
          <div className="loader" id="contactLinks">
            <span>
              <a
                href="https://www.linkedin.com/in/gobindsetia/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt=""
                />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/GobindSetia"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/48/000000/github.png"
                  alt=""
                />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/GobindSetia"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  alt=""
                />
              </a>
            </span>
            <span>
              <a
                href="https://join.skype.com/invite/uhe7dMrbvdgC"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/skype--v1.png"
                  alt=""
                />
              </a>
            </span>
          </div>
          <div id="contactInfo">
            <p>Address: Fatehabad, Haryana(125051)</p>
            <p>Email: gobind.setia@gmail.com</p>
            <p>Contact: +917056403400</p>
          </div>
        </div>
        <div>
          <form action="" name="contact" method="POST" data-netlify="true" onSubmit="submit" >
            <input type="email" placeholder="Your Email" name="email"/>
            <textarea name="description" id="" rows="3" placeholder="How can I help you?"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
