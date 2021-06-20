import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

const DUMMY_LINKS = [
  { name: "Home", route: "/" },
  { name: "TV Shows", route: "/TVShows" },
  { name: "Movies", route: "/Movies" },
  { name: "New& Popular", route: "/NewPopular" },
  { name: "My List", route: "/MyList" },
];

// Styled Components
const Header = styled.div`
  position: fixed;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh;
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
    justify-content: space-around;
    width: 24%;
    height: 100%;
    position: relative;
  }

  .searchIcon,
  .notificationIcon,
  .searchIconWS {
    color: #fff;
    width: 50%;
    height: 35px;
    position: relative;
    z-index: 9;
    transition: 0.5s all;
  }

  .notificationIcon,
  .searchIconWS {
    display: none;
    /* position: absolute; */
  }
  .iconsRight .avatar {
    width: 35px;
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

  .browseContent {
    display: none;
  }
  .inputSearch {
    position: absolute;
    top: 0;
    left: -100%;
    background: #000;
    color: #fff;
    width: 130%;
    height: 100%;
    z-index: 8;
    display: flex;
    gap: 1rem;
    transition: 0.5s all;
    opacity: 0;
    transform: translateX(0);
    padding: 0 10px 0 30px;
    font-size: 0.9rem;
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

  .logo_long {
    display: none;
  }

  @media (min-width: 480px) {
    .logo_short {
      display: none;
    }
    .iconsRight {
      width: 36%;
    }
    .logo_long,
    .notificationIcon,
    .browseContent,
    .searchIconWS {
      display: block;
    }
    .searchIconWS.searchActive {
      /* left: -100%; */
      /* position: absolute; */
      /* height: 100%; */
      transform: translateX(-250%);
    }
    .navigationTab,
    .searchIcon {
      display: none;
    }
    .inputSearch {
      opacity: 0;
    }
    .inputSearch.showSearch-enter-active {
      opacity: 0;
      transform: translateX(100%);
    }
    .inputSearch.showSearch-enter-done {
      opacity: 1;
      transform: translateX(0);
    }
    .inputSearch.showSearch-exit-active {
      opacity: 0;
      transform: translateX(100%);
    }
    .primaryNavigation {
      /* position: absolute; */
      /* height: 50%; */
      /* display: none; */
    }
  }
`;

export default function MainMovie(props) {
  const [scroll, setScroll] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  useEffect(() => {
    const chageColor = () => {
      if (window.scrollY <= 80) {
        setScroll(false);
      } else setScroll(true);
    };
    window.addEventListener("scroll", chageColor);
  }, []);

  const searchingMb = () => {
    props.onClick();
  };
  const searchingWS = () => {
    setshowSearch((prevState) => !prevState);
    console.log(showSearch);
  };
  //TODO: Miss 'active' functionality
  return (
    <Header className={scroll && "active"}>
      <div className="icons">
        <div className="iconsLeft">
          <img
            className="logo logo_short"
            src="https://i.ibb.co/cy5Nv1p/F-netflix.png"
            alt="logo_netflix"
          />
          <img
            className="logo logo_long"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo_netflix"
          />
        </div>
        <div className="iconsRight">
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={showSearch}
            timeout={500}
            classNames="showSearch"
          >
            <input className="inputSearch" />
          </CSSTransition>

          <div className="searchIcon" onClick={searchingMb}>
            <SearchIcon style={{ fontSize: 40 }} />
          </div>
          <div
            className={`searchIconWS ${showSearch && "searchActive"}`}
            onClick={searchingWS}
          >
            <SearchIcon style={{ fontSize: 40 }} />
          </div>
          <div className="notificationIcon">
            <NotificationsIcon style={{ fontSize: 40 }} />
          </div>
          <img
            className="avatar"
            src="https://avatars.dicebear.com/api/avataaars/human.svg"
          />
        </div>
      </div>
      <ul className="primaryNavigation">
        <li className="browseContent">Browse</li>
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
