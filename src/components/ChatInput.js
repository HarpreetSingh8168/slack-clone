import React, { useState } from "react";
import styled from "styled-components";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };
  return (
    <Container>
      <InputContainer>
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Message here..."
          />
          <SendButton type="submit" onClick={send}>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #808dbe;
  border-radius: 4px;
  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      font-size: 15px;
    }
    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`;

const Send = styled(SendRoundedIcon)`
  color: #d9d9d9;
`;
