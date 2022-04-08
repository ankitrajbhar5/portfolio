import "./HomePage.scss";
import { useState, useEffect } from "react";
import CustomButton from "../../Components/Button/CustomButton";
import Typewriter from "typewriter-effect";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}
const HomePage = () => {
  const [vh] = useWindowSize();
  return (
    <div style={{ height: vh + "px" }} className="homePage" id="Home">
      <div className="homeContainer">
        <div className="content">
          <h1 className="hello">
            Hello,<span className="amText"> I Am</span>{" "}
          </h1>
          <h1 className="amSoft">
            <span className="boldText">
              {" "}
              <Typewriter
                options={{
                  strings: ["Ankit Rajbhar", "Front End Developer", ""],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </span>
          </h1>

          <a href="./resume.pdf" download>
            <CustomButton title="Download resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
