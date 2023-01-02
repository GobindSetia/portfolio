
import { useEffect } from "react";
import MyPic from  "../assets/GobindSetia.png"
import { typeWriter } from "../utils/typewriter";
import "./imageBox.css";

export const Home = () => {
setInterval(typeWriter,200);
  return (
    <section id="mainSection">
      <div id="intro">
        <div>
          <h1 id="myName"></h1> <h2 id="designation"></h2>
        </div>
        <div id="imageDiv">
          <div className="box boxImage"><img src={MyPic} alt="" /></div>
        </div>
      </div>
    </section>
  );
};
