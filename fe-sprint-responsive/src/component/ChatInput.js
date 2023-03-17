import styled from 'styled-components';
import '../App.css';
import {FiSend} from "react-icons/fi"

const ChatInputContainer = styled.div`
  /* background-color: #f8f8f8; */
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 0 50px;
  input {
    height: 40px;
    flex: 1;
    padding: 8px;
    /* border: none; */
    border: 0.3px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    outline: none;
  }
  button {
    margin-left: 10px;
    color: #000;
    background-color: #fff;
    border: 0.3px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
    height: 40px;
    cursor: pointer;
    &:hover {
    background-color: #ccc;
    color: #fff;
    }
    svg {
		margin-top: 3px;
    font-size: 14px;
    
    }
  }
  
`

const ChatInput = () => {
  const inputKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      alertMessage();
    }
  }
  const alertMessage = () => {
    alert('서비스 준비중 입니다 😅')
  }

  return (
    <ChatInputContainer>
      <input placeholder='ask something' onKeyDown={inputKeyDownHandler}/>
      <button onClick={alertMessage}><FiSend /></button>
    </ChatInputContainer>
  )
}

export default ChatInput;