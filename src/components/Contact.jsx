import "./loader.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="sectionHeading">
        <h1>Contact Me</h1>
      </div>
      <div className="loader" id="contactLinks">
        <span><a href="https://www.linkedin.com/in/gobindsetia/"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a></span>
        <span><a href="https://github.com/GobindSetia" target="_blank"><img src="https://img.icons8.com/ios-glyphs/48/000000/github.png"/></a></span>
        <span><a href="https://twitter.com/GobindSetia" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a></span>
        <span><a href="https://join.skype.com/invite/uhe7dMrbvdgC" target="_blank"><img src="https://img.icons8.com/color/48/000000/skype--v1.png"/></a></span>
        <span><a href="mailto:gobind.setia@gmail.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/gmail-new.png"/></a></span>
      </div>
    </section>
  );
};
