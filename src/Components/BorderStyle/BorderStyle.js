import "./BorderStyle.scss";

function BorderStyle(props) {
  return (
    <div className="borderStyle">
      <div className="styleContainer">
        <div className="hairline"></div>
        <div className="styleIcon">{props.styleIcon}</div>
        <div className="hairline"></div>
      </div>
    </div>
  );
}

export default BorderStyle;
