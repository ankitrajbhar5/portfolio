import BorderStyle from "../../Components/BorderStyle/BorderStyle";
import SkillBar from "../../Components/SkillBar/SkillBar";
import "./SkillsPage.scss";

const SkillsPage = () => {
  return (
    <div className="skillPage" id="Skills">
      <div className="skillContainer">
        <div className="skillHead">
          <h1 className="skillText">My Skills</h1>
          <BorderStyle styleIcon={<span class="icon-skill"></span>} />
          <h1 className="skillPara">
            Money is just a way to keep score. The best people in any field are
            motivated by passion. That becomes more true the higher the skill
            level gets.
          </h1>
        </div>
        <div className="bar">
          <div className="leftBarArea">
            <div className="pdBtm figma">
              <SkillBar skillTitle="UI/UX (Figma)" />
            </div>
            <div className="pdBtm html">
              <SkillBar skillTitle="HTML 5" />
            </div>
            <div className="pdBtm css">
              <SkillBar skillTitle="CSS/SCSS" />
            </div>
          </div>
          <div className="rightBarArea">
            <div className="pdBtm java">
              <SkillBar skillTitle="JavaScript" />
            </div>
            <div className="pdBtm react">
              <SkillBar skillTitle="React js" />
            </div>
            <div className="pdBtm native">
              <SkillBar skillTitle="React Native" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
