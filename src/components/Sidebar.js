import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { SidebarItems } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from "../Firebase";
import { useHistory } from 'react-router-dom'

function Sidebar({ rooms }) {

  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`)
    }
  }
  const addChannel = () => {
    const promptName = prompt("Enter Channel Name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };
  return (
    <Container>
      <WorkspaceContainer>
        <Name>Hask_hai</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {SidebarItems.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddChannelIcon>
            <AddIcon onClick={addChannel} />
          </AddChannelIcon>
        </NewChannelContainer>
        <ChannelList>
          {rooms.map((room) => (
            <Channel key={room.id} onClick={()=>goToChannel(room.id)}># {room.name}</Channel>
          ))}
        </ChannelList>
      </ChannelContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 12px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelList = styled.div`
  margin-top: 8px;
`;
const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const AddChannelIcon = styled.div`
  cursor: pointer;
`;
