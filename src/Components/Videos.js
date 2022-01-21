import styled from "styled-components";

import React from "react";
import Video from "./Video";
import videos from "/public/videos";

export default function Videos() {
  return (
    <Container>
      {videos.map((video) => {
        console.log(video);
        return (
          <Video
            thumbnail={video.thumbnail}
            username={video.username}
            userImg={video.userImg}
            title={video.title}
            views={video.views}
            uploadDate={video.uploadDate}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  gap: 5px;
  row-gap: 25px;
  background-color: rgba(0, 0, 0, 0.05);
`;
