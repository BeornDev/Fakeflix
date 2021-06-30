import Carousel from "./Carousel";
import useRequestMedia from "../hooks/useRequestMedia";

const CarouselFactory = ({ media_type, list_type, title } = {}) => {
  // console.log("Rendering Carousel Factoring");

  const { media, error } = useRequestMedia({
    media_type,
    list_type,
  });

  return media && <Carousel mediaReceived={media} title={title} />;
};

export default CarouselFactory;
