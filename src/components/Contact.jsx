import "./loader.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="sectionHeading">
        <h1>Contact Me</h1>
      </div>
      <div className="loader" id="contactLinks">
        <span><a href="https://www.linkedin.com/in/gobindsetia/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/></a></span>
        <span><a href="https://github.com/GobindSetia" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt=""/></a></span>
        <span><a href="https://twitter.com/GobindSetia" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt=""/></a></span>
        <span><a href="https://join.skype.com/invite/uhe7dMrbvdgC" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/skype--v1.png" alt=""/></a></span>

      </div>
      <div id="contactInfo">
          <p>Address: Fatehabad, Haryana(125051)</p>
          <p>Email: gobind.setia@gmail.com</p>
          <p>Contact: +917056403400</p>
      </div>
      <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </section>
  );
};
