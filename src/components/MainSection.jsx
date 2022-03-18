import MyPic from  "../assets/me.png"
import MyPic2 from  "../assets/GobindSetia.png"
import "./imageBox.css";
export const Home = () => {
  return (
    <section id="mainSection">
      <div id="intro">
        <div>
          <h1 id="myName"></h1> <h2 id="designation"></h2>
        </div>
        <div id="imageDiv">
          <div class="box boxImage"><img src={MyPic2} alt="" /></div>
        </div>
      </div>
    </section>
  );
};
