import React from "react";
import Link from "next/link";

//Material Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import styled from "styled-components";

const linksFooter = [
  { name: "Audio and Subtitles", link: "/" },
  { name: "Audio Description", link: "/" },
  { name: "Help Center", link: "/" },
  { name: "Gift Cards", link: "/" },
  { name: "Media Center", link: "/" },
  { name: "Investor Relations", link: "/" },
  { name: "Jobs", link: "/" },
  { name: "Terms of Use", link: "/" },
  { name: "Privacy", link: "/" },
  { name: "Legal Notices", link: "/" },
  { name: "Cookie Preferences", link: "/" },
  { name: "Corporate Information", link: "/" },
  { name: "Contact Us", link: "/" },
];

const FooterDiv = styled.div`
  color: grey;

  .socials {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }
  .helperLinks {
    padding: 10px;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
  }
  .singularLink {
    width: 45%;
    margin-bottom: 1rem;
  }
  .terms {
    padding: 0 10px;
    padding-bottom: 5px;
  }
  .btnFooter {
    border: grey solid 2px;
    background: transparent;
    color: grey;
    padding: 5px 8px;
  }
  .leyend {
    font-size: 0.7rem;
  }
`;

//TODO: mismo problema que con el icono de los botones del main. Averiguar como pasar un HTML
export default function Footer() {
  return (
    <FooterDiv>
      <div className="socials">
        <Link href="https://www.facebook.com/">
          <FacebookIcon style={{ fontSize: 30 }} />
        </Link>
        <Link href="https://www.instagram.com/">
          <InstagramIcon style={{ fontSize: 30 }} />
        </Link>
        <Link href="https://www.twitter.com/">
          <TwitterIcon style={{ fontSize: 30 }} />
        </Link>
        <Link href="https://www.youtube.com/">
          <YouTubeIcon style={{ fontSize: 30 }} />
        </Link>
      </div>
      <ul className="helperLinks">
        {linksFooter.map((l) => (
          <li key={"link" + l.name} className="singularLink">
            <Link href={l.link}>{l.name}</Link>
          </li>
        ))}
      </ul>
      <div className="terms">
        <button className="btnFooter">Service Code</button>
        <p className="leyend">
          © 1997-2021 Netflix, Inc. {`{ab64ba8b-9679-48b9-82d8-18469964f9c2}`}
        </p>
      </div>
    </FooterDiv>
  );
}
