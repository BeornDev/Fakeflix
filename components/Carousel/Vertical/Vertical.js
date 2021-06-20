import useHttpRquest from "../../hooks/useHttpRquest";
import styled from "styled-components";

const VerticalCarouselDiv = styled.div`
  color: #fff;
  margin-bottom: 10px;
  /* height: 30vh; */
  /* margin: 20px; */

  .titleVertical {
    word-spacing: 2px;
    font-size: 1rem;
    margin: 8px 0;
    /* height: 3vh; */
  }
  .carouselVertical {
    width: 100%;
    height: 90%;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
  .cvItem {
    height: 25vh;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .cvItemImg {
    height: 120%;
  }
`;

export default function CarouselVertical(props) {
  const [topRated, genre] = useHttpRquest(props.name);
  // TODO: pendiente funcionalidad del hover
  return (
    <VerticalCarouselDiv>
      <h2 className="titleVertical">{props.title}</h2>
      <ul className="carouselVertical">
        {topRated.slice(0, 3).map((m) => (
          <li className="cvItem" key={m.id}>
            <img
              className="cvItemImg"
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
            />
          </li>
        ))}
      </ul>
    </VerticalCarouselDiv>
  );
}
