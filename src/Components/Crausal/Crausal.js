import "./Crausal.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Todo from "../../img/todo.png";
import Port from "../../img/port.png";
import Weather from "../../img/weather.png";
import Shop from "../../img/shop.png";


function Crausal() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="crausalStyle">

      <Carousel responsive={responsive}>
      <Card title = "To-do webApp" img={Todo}></Card>
      <Card title = "Personal Portfolio" img={Port}></Card>
      <Card title = "Weather Mobile App" img={Weather}></Card>
      <Card title = "Shopping webApp" img={Shop}></Card>
      <Card title = "To-do webApp" img={Todo}></Card>
     
      </Carousel>
    </div>
  );
}

export default Crausal;



function Card(props) {
  const {title,img} =props
  return (
    <div className="card">
      <img alt= "img" className="imgRadius" src={img} />
      <h1 className="heading">{title}</h1>
      <h1 className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
        lacus egestas, luctus enim ut, porttitor neque.
      </h1>
    </div>
  );
}
