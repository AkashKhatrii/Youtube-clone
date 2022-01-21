import styled from "styled-components";
import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Search" />
        <button>
          <SearchIcon />
        </button>

        <Mic>
          <MicIcon />
        </Mic>
      </Search>

      <Notifications>
        <VideoCallIcon />
        <ViewComfyIcon />
        <NotificationsNoneIcon />
      </Notifications>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* height: 60px; */
  padding: 0px 10px 0px 180px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Search = styled.div`
  align-self: flex-start;
  margin-top: 0px;
  padding: 10px;

  display: flex;
  align-items: center;

  input {
    width: 600px;
    padding: 5px;
    height: 35px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  button {
    height: 35px;
    padding: 5px 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* border: 2px solid rgba(249, 249, 249, 0.8); */
  }
`;

const Mic = styled.button`
  border: transparent;
  outline: none;
  width: 39px;

  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f8f8f8;
`;

const Notifications = styled.div`
  display: flex;
  /* margin-top: 10px; */
  align-items: center;

  .MuiSvgIcon-root {
    margin-right: 25px;
  }
`;

export default Header;
