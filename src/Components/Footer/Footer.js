import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerCotainer">
        <h1 className="textStyle">
          Design & developed by <span className="ankit">Ankit Rajbhar</span>{" "}
        </h1>
        <div className="iconContainer">
          <div className="iconItems">
            <a href="https://www.linkedin.com/in/ankit-rajbhar-11a341215/">
              <span class="icon-linked"></span>
            </a>
          </div>
          <div className="iconItems">
            <a href="https://twitter.com/AnkitRa68610492">
              <span class="icon-twitter"></span>
            </a>
          </div>
          <div className="iconItems">
            <a href="https://www.instagram.com/ankitrajbhar5/">
              <span class="icon-insta"></span>
            </a>
          </div>
          <div className="iconItems">
            <a href="https://www.facebook.com/ankit.rajbhar.9">
              <span class="icon-facebook"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
