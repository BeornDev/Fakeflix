import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";

import SearchIcon from "@material-ui/icons/Search";

const DUMMY_LINKS = [
  { name: "Home", route: "/" },
  { name: "TV Shows", route: "/TVShows" },
  { name: "Movies", route: "/Movies" },
  { name: "New& Popular", route: "/NewPopular" },
  { name: "My List", route: "/MyList" },
];

// Styled Components
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
  position: fixed;
  z-index: 4;
  width: 100%;
  transition: 1s all;

  .icons {
    padding: 15px;
    height: 30%;
    position: absolute;
    z-index: 7;
    top: 5%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .iconsLeft {
    height: 130%;
    width: 20%;
  }

  .iconsLeft .logo {
    height: 100%;
  }

  .iconsRight {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    height: 100%;
  }

  .iconsRight .searchIcon {
    color: #fff;
    width: 50%;
  }

  .iconsRight .avatar {
    width: 50%;
    background-color: #861388;
    border-radius: 5px;
  }

  .primaryNavigation {
    display: flex;
    color: #fff;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: 0.8rem;
    width: 80%;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  }

  &.active {
    background: rgba(0, 0, 0, 0.5);
    height: 10vh;
  }
  &.active .iconsLeft,
  &.active .iconsRight {
    display: none;
    pointer-events: none;
  }
`;

export default function MainMovie(props) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const chageColor = () => {
      if (window.scrollY <= 80) {
        setScroll(false);
      } else setScroll(true);
    };
    window.addEventListener("scroll", chageColor);
  }, []);

  const searching = () => {
    props.onClick();
  };
  //TODO: Miss 'active' functionality
  return (
    <Header className={scroll && "active"}>
      <div className="icons">
        <div className="iconsLeft">
          <img
            className="logo"
            src="https://i.ibb.co/cy5Nv1p/F-netflix.png"
            alt="logo_netflix"
          />
        </div>
        <div className="iconsRight">
          <div className="searchIcon" onClick={searching}>
            <SearchIcon style={{ fontSize: 40 }} />
          </div>
          <img
            className="avatar"
            src="https://avatars.dicebear.com/api/avataaars/human.svg"
          />
        </div>
      </div>
      <ul className="primaryNavigation">
        {DUMMY_LINKS.map((linkPage, i) => {
          if (
            linkPage.name === "TV Shows" ||
            linkPage.name === "Movies" ||
            linkPage.name === "My List"
          ) {
            return (
              <li key={linkPage.name} className="navigationTab">
                <Link href={linkPage.route}>{linkPage.name}</Link>
              </li>
            );
          }
          return;
          // console.log(linkPage.name);
        })}
      </ul>
    </Header>
  );
}
