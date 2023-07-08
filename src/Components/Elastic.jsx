import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Elastic.css";

const Elastic = () => {
  return (
    <>
      <Carousel itemsToShow={1}>
        <Item />
        <Item />
      </Carousel>
    </>
  );
};

export default Elastic;
