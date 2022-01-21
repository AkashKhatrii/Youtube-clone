import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MenuIcon from "@material-ui/icons/Menu";
function Left() {
  return (
    <Div>
      <Link>
        <MenuIcon />
        <Img>
          <img src="/images/yt-logo.svg" alt="logo" />
        </Img>
      </Link>
      <Link>
        <HomeIcon />
        <h3>Home</h3>
      </Link>

      <Link>
        <ExploreIcon />
        <h3>Explore</h3>
      </Link>

      <Link>
        <SubscriptionsIcon />
        <h3>Subscriptions</h3>
      </Link>

      <Line />

      <Link>
        <VideoLibraryIcon />
        <h3>Library</h3>
      </Link>

      <Link>
        <HistoryIcon />
        <h3>History</h3>
      </Link>

      <Link>
        <OndemandVideoIcon />
        <h3>Your Videos</h3>
      </Link>

      <Link>
        <WatchLaterIcon />
        <h3>Watch Later</h3>
      </Link>

      <Link>
        <ThumbUpIcon />
        <h3>Liked Videps</h3>
      </Link>

      <Line />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  max-width: 200px;
  padding: 10px;
`;

const Img = styled.div`
  height: 60px;
  width: 90px;
  margin-top: -13px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;

  img {
    width: 120px;
    height: 75px;
    padding: 0;
  }

  /* &:hover {
    background-color: gray;
    border-radius: 4px;
  } */

  &:hover h3:before {
    transform: scaleX(1);
  }

  .MuiSvgIcon-root {
  }

  h3 {
    font-size: 17px;
    font-weight: 200;
    margin-left: 10px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0px;
      height: 2px;
      background-color: black;
      border-radius: 0 0 2px 2px;
      transform: scaleX(0);
      transform-origin: left center;
      transition: all 0.25s ease-in;
    }
  }
`;

const Line = styled.div`
  margin-top: 10px;
  height: 1.5px;
  background-color: gray;
`;

export default Left;
