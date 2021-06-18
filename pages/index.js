import Header from "../components/Header/Header";
import MainView from "../components/MainView/MainView";
import Vertical from "../components/Carousel/Vertical/Vertical";
import Horizontal from "../components/Carousel/Horizontal/Horizontal";

export default function Home() {
  return (
    <div>
      <Header />
      <MainView />
      <Vertical />
      <Horizontal />
    </div>
  );
}
