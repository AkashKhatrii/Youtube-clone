import React from "react";

import styled from "styled-components";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

export default function Video({
  thumbnail,
  userImg,
  title,
  username,
  views,
  uploadDate
}) {
  return (
    <Container>
      <img src={thumbnail} alt="thumbnail" />
      <VideoInfo>
        <Img>
          <img src={userImg} alt="userImg" />
        </Img>
        <Content>
          <p>{title}</p>
          <span>{username}</span>
          <span>
            {views} . {uploadDate}
          </span>
        </Content>
      </VideoInfo>
      <Button>
        <a>
          <WatchLaterIcon />
          <p>Watch later</p>
        </a>
        <a>
          <QueueMusicIcon />
          <p>Add to Queue</p>
        </a>
      </Button>
    </Container>
  );
}

const Button = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;
  transition: all ease-in;
  transition-delay: 1.5s;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 8px;

    p {
      margin-left: 10px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  transition: all 0.7s ease-in;
  /* transition-delay: 1.5s; */

  img {
    width: 100%;
    height: 180px;
  }

  /* &:hover {
    transform: scale(1.2);
    background-color: white;

    ${Button} {
      display: block;
    }
  } */
`;

const VideoInfo = styled.div`
  display: flex;
`;
const Img = styled.div`
  margin-top: 10px;
  margin-right: 10px;

  height: 38px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const Content = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    word-wrap: wrap;
    font-family: "Roboto", "Arial", sans-serif;
    font-weight: 550;
    margin-bottom: 0px;
  }
  span {
    color: rgba(0, 0, 0, 0.6);
  }
`;
