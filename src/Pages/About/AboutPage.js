import "./AboutPage.scss";
import React from "react";
import CustomButton from "../../Components/Button/CustomButton";
import Profile from "../../img/profile.png";

const AboutPage = () => {
  return (
    <div className="aboutPage" id="About">
      <div className="aboutContainer">
        <div className="imgBox">
          <img alt= "img" src={Profile} className="responsive" />
        </div>
        <div className="textContent">
          <h1 className="head">About me</h1>
          <h1 className="para">Hey there!</h1>
          <h1 className="para">
            My name is Ankit Rajbhar.I live in Ranchi, Jharkhand. And I've
            completed my Bachelor of Technology(B.Tech) from Gandhi
            Institute of Engineering and Technology University, Gunupur, Odisha.
          </h1>
          <h1 className="para">
            I love to solve problems.Whether it’s finding the most elegant way
            to write a line of code or figuring out the solutions, I love the
            challenge of finding a way and discovering solutions.{" "}
          </h1>
          <div className="btnContainer">
            <div className="contactBtn">
              <CustomButton title="Contact me" />
            </div>
            <div className="downloadBtn">
              <a href="./resume.pdf" download>
                <CustomButton title="Download resume" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
