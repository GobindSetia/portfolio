import home from "../assets/home.png";
import MenuIcon from '@material-ui/icons/Menu';
export const Navbar = () => {
  return (
    <nav>
      <div id="navbar">
        <div id="navbarLeft">
          <a href="#mainSection">
            <img src={home} alt="" height={"100%"} />
          </a>
        </div>
        

        <div id="navbarRight">
        <div id="resumeDownload"><button onClick={()=>{window.open("https://drive.google.com/file/d/1YvSOSCy1api8yRDmKo-6o4SxEnDOkhc3/view", "_blank")}}>Resume  ▼</button></div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://medium.com/@gobindsetia" target="_blank">Blog</a>
        </div>
        <div>
        </div>
        <div className="dropdown">     
          <span><MenuIcon style={{ fontSize: 50 }}/></span>
          <div className="dropdown-content">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/1YvSOSCy1api8yRDmKo-6o4SxEnDOkhc3/view" target="_blank">Resume</a>
          <a href="https://medium.com/@gobindsetia" target="_blank">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
