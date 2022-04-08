import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.scss";

const CustomButton = (props) => {
  let { title, type, className, onClick } = props;
  return (
    <Button className={className} type={type} onClick={onClick}>
      {title}
    </Button>
  );
};

CustomButton.defaultProps = {
  className: "submitBtn",
};

export default CustomButton;
