import "./loader.css";
export const About = () => {
  return (
    <section id="about">
      <div className="sectionHeading">
        <h1>About me</h1>
      </div>
      <div id="introText">
        <p>Hello there</p>
        <p>
          I am from Haryana, India, a graduate in B.Tech.(CSE) from Amity University
          Noida. I have worked as an SEO executive for an year, implementing on-page and off-page optimization on webpages.  
        </p>
        <p>Currently, I am a student of Full Stack Web Development at <a href="https://masaischool.com/" target="_blank" rel="noreferrer">Masai School</a>, specializing in MERN Stack.</p>
        <div id="resumeDownload"><button onClick={()=>{window.open("https://drive.google.com/file/d/1YvSOSCy1api8yRDmKo-6o4SxEnDOkhc3/view", "_blank")}}>Resume</button></div>
      </div>
      <div id="techStack">
        <div className="loader">
          <span>
            <img
              align="left"
              alt="HTML"
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="CSS"
              src="https://img.icons8.com/color/48/000000/css3.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="JavaScript"
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="Git"
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="ReactJS"
              src="https://img.icons8.com/external-others-amoghdesign/48/000000/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="Redux"
              src="https://img.icons8.com/color/48/000000/redux.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="NodeJS"
              src="https://img.icons8.com/color/48/000000/nodejs.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="MongoDB"
              src="https://img.icons8.com/color/48/000000/mongodb.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="Git"
              src="https://img.icons8.com/color/48/000000/git.png"
            />
          </span>
          <span>
            <img
              align="left"
              alt="NPM"
              src="https://img.icons8.com/color/48/000000/npm.png"
            />
          </span>
        </div>
      </div>
    </section>
  );
};
