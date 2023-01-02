import "./loader.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="sectionHeading">
        <h1>Contact Me</h1>
      </div>
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
      </div>
    </section>
  );
};
