import Link from "next/link";
import classes from "./Header.module.css";

const DUMMY_LINKS = [
  { name: "Home", route: "/" },
  { name: "TV Shows", route: "/TVShows" },
  { name: "Movies", route: "/Movies" },
  { name: "New& Popular", route: "/NewPopular" },
  { name: "My List", route: "/MyList" },
];

export default function MainMovie(props) {
  //TODO: Miss 'active' functionality
  return (
    <div className={classes.header}>
      <div className={classes.mainHeader}>
        <div className={classes.logoContainer}>
          <img
            onClick={() => console.log(props.nowPlaying)}
            className={classes.logo}
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png"
            alt="logo_netflix"
          />
        </div>
        <ul className={classes.primaryNavigation}>
          {DUMMY_LINKS.map((linkPage) => {
            // console.log(linkPage.name);
            return (
              <li key={linkPage.name} className={classes.navigationTab}>
                <Link href={linkPage.route}>{linkPage.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={classes.secondayNavigation}>
          <div className={classes.navElement}>
            <div className={classes.searchBox}></div>
            <div className={classes.notifications}></div>
            <div className={classes.acountIcon}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
