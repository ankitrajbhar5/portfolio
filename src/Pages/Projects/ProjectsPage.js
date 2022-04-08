import "./ProjectsPage.scss";
import BorderStyle from "../../Components/BorderStyle/BorderStyle";
import Crausal from "../../Components/Crausal/Crausal";

const ProjectsPage = () => {
  return (
    <div className="projectPage" id="Projects">
      <div className="projectContainer">
        <div className="projectHead">
          <h1 className="projectText">My Projects</h1>
          <BorderStyle styleIcon={<span class="icon-project"></span>} />
        </div>
        <div className="crausalContainer">
          <Crausal />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
