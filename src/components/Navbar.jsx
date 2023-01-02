import home from "../assets/home.png";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <div id="navbar">
        <div id="navbarLeft">
          <Link to={"/"}>
            <img src={home} alt="" height={"100%"} />
          </Link>
        </div>


        <div id="navbarRight">
          <div id="resumeDownload"><button onClick={() => { window.open("https://drive.google.com/file/d/1YvSOSCy1api8yRDmKo-6o4SxEnDOkhc3/view", "_blank") }}>Resume</button></div>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div>
        </div>
        <div className="dropdown">
          <span><MenuIcon style={{ fontSize: 50 }} /></span>
          <div className="dropdown-content">
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
            <a href="https://drive.google.com/file/d/1YvSOSCy1api8yRDmKo-6o4SxEnDOkhc3/view" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
