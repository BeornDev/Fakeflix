import React, { useState } from "react";
import styled from "styled-components";

import NotificationsIcon from "@material-ui/icons/Notifications";
import Link from "next/link";
import useHttpRequest from "../hooks/useHttpRquest";
import useRequestMedia from "../hooks/useRequestMedia";
import Loader from "../../Layout/Loader";

import { CSSTransition } from "react-transition-group";

const HeaderNotificationsDiv = styled.div`
  /* display: none; */
  position: relative;
  cursor: pointer;

  .dropdown-notifications {
    position: absolute;
    right: 50%;
    height: 60vh;
    overflow: scroll;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    gap: 10px;
    width: 350px;
    font-size: 0.7rem;
    border-top: solid 3px #fff;
    display: flex;
    overflow-x: hidden;
  }

  .notification-item {
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    gap: 10px;
  }

  .notification-item img {
    width: 35%;
    margin: 5px 10px 20px;
  }

  .dropdown-details-item {
  }

  .items-details-name {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .items-details-date {
    font-size: 0.7rem;
    color: grey;
  }

  @media (min-width: 768px) {
    /* display: block; */
  }
`;
export default function HeaderNotifications() {
  const [showDropDown, setShowDropDown] = useState(false);
  const { media, error } = useRequestMedia({
    media_type: "all",
    list_type: "trending",
    time_window: "week",
  });

  if (media) {
    const convertTime = (date) => {
      const dateOnFormat = new Date(date);
      const diferenceOnDays = Math.floor(
        (new Date().getTime() - dateOnFormat.getTime()) / (1000 * 3600 * 24)
      );
      if (diferenceOnDays > 30) {
        const dateOnMonths = Math.floor(diferenceOnDays / 30);
        return dateOnMonths > 1
          ? dateOnMonths + " Months ago"
          : dateOnMonths + " Month ago";
      }
      if (diferenceOnDays > 6) {
        const dateOnMonths = Math.floor(diferenceOnDays / 7);
        return dateOnMonths > 1
          ? dateOnMonths + " Weeks ago"
          : dateOnMonths + " Week ago";
      }
      if (diferenceOnDays > 1) {
        return diferenceOnDays > 1
          ? diferenceOnDays + " Days ago"
          : diferenceOnDays + " Day ago";
      }
      if (diferenceOnDays < 0) {
        return "Will be here soon";
      }
    };

    //TODO: el dropdown mas o menos califica para componente pero no veo como minimizarlo.
    return (
      <HeaderNotificationsDiv
        onMouseEnter={() => setShowDropDown(true)}
        onMouseLeave={() => setShowDropDown(false)}
        onClick={() => setShowDropDown((prevstate) => !prevstate)}
      >
        <NotificationsIcon
          onClick={() => console.log("notifications")}
          style={{ fontSize: 30 }}
        />
        <CSSTransition
          in={showDropDown}
          timeout={1000}
          classNames="show-dropdown-notification"
          unmountOnExit
        >
          <div className="dropdown-notifications">
            {media.map((m) => (
              <Link key={m.id} href="/">
                <div
                  onClick={() => console.log(m)}
                  className="notification-item"
                >
                  <img
                    src={
                      m.backdrop_path == null
                        ? "https://wallpapercave.com/wp/wp1935890.jpg"
                        : `https://image.tmdb.org/t/p/w500${m.backdrop_path}`
                    }
                  />
                  <div className="dropdown-details-item">
                    <p className="items-details-name">
                      {m.media_type === "tv" ? m.name : m.original_title}
                    </p>
                    <p className="items-details-date">
                      {convertTime(
                        m.media_type === "tv"
                          ? m.first_air_date
                          : m.release_date
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CSSTransition>
      </HeaderNotificationsDiv>
    );
  } else {
    return (
      <HeaderNotificationsDiv style={{ alignItems: "center" }}>
        <Loader />
      </HeaderNotificationsDiv>
    );
  }
}
