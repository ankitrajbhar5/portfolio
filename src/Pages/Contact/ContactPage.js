import "./ContactPage.scss";
import BorderStyle from "../../Components/BorderStyle/BorderStyle";
import CustomButton from "../../Components/Button/CustomButton";

const ContactPage = () => {
  return (
    <div className="contactPage" id="Contact">
      <div className="contactContainer">
        <div className="contactHead">
          <h1 className="contactText">Contact Me</h1>
          <BorderStyle styleIcon={<span class="icon-contact"></span>} />
        </div>
        <div className="formBox">
          <div className="contactForm">
            <div className="inputFlex">
              <div className="border">
                {" "}
                <input
                  className="inputText"
                  placeholder="Enter your first name*"
                />
              </div>
              <div className="border">
                {" "}
                <input
                  className="inputText"
                  placeholder="Enter your last name*"
                />
              </div>
            </div>
            <div className="inputFlex">
              <div className="border">
                {" "}
                <input className="inputText" placeholder="Enter your email*" />
              </div>
              <div className="border">
                {" "}
                <input
                  className="inputText"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="inputFlexOut">
              <div className="borderout">
                {" "}
                <input className="inputText" placeholder="Enter your massege" />
              </div>
            </div>
            <div className="subBtn">
              <CustomButton title="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
