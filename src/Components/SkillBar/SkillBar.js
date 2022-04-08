import "./SkillBar.scss";

function SkillBar(props) {
  return (
    <div className="skillBar">
      <h1 className="skillTitle">{props.skillTitle}</h1>
      <div className="bottomBar">
        <div className="topBar"> </div>
      </div>
    </div>
  );
}

export default SkillBar;
