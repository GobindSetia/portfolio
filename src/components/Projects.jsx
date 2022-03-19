import CloudDoneIcon from '@material-ui/icons/CloudDone';
import GitHubIcon from '@material-ui/icons/GitHub';
export const Projects = () => {
    return (
      <section id="projects">
        <div className="sectionHeading">
        <h1>Projects</h1>
        </div>
        
        <div id="projectsDiv">
            <div className="project">
              <div className="projectImage" id="travelocityImage"></div>
              <div className="projectDetail">
                <h4>Clone of Travelocity.com</h4>
                <p>Flight booking functionality of travelocity.com. Allows selection of To-From cities and travel date. Fetched flights can be sorted based on the price.</p>
                <p>HTML | CSS | JS</p>
                <div>
                  <button><CloudDoneIcon/><br/>Deployed</button>
                  <button><GitHubIcon/><br/>GitHub</button>  
                </div> 
              </div>
            </div>

            <div className="project">
              <div className="projectImage" id="vijaysalesImage"></div>
              <div className="projectDetail">
                <h4>Clone of VijaySales.com</h4>
                <p>Mobile ordering functionality of vijaysales.com. Uses APIs to fetch products to be displayed on index-page.</p>
                <p>HTML | CSS | JS </p>
                <div>
                  <button><CloudDoneIcon/><br/>Deployed</button>
                  <button><GitHubIcon/><br/>GitHub</button>             
                </div>
              </div>
            </div>

        </div>
      </section>
    );
  };