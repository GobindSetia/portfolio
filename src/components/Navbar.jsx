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
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="dropdown">
          <span><MenuIcon style={{ fontSize: 50 }}/></span>
          <div className="dropdown-content">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
