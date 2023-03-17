import styled from 'styled-components';
import '../App.css';
import { FiPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const TopButton = styled.div`
  position: fixed;
`;

const SmallNewChat = styled.div`
  background-color : rgb(52,53,145);
  color : white;
  width: 235px; 
  display : grid;
  @media screen and (min-width: 760px){
    display : none;
  }
` 
const IconWrap = styled.div`
  display : flex;
  color : white;
  height : 100px
  flex-direction: row;
  justify-content: center;
  
`;
const LogoutWrap = styled.div`
  display : flex;
  color : white;

  flex-direction: row;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  margin: auto;
`;


const Nav = () => {
  return (
  <>
    <nav>
      <ul className='list'>
        <li className='newChat'><a href='#'><FiPlus/>New Chat</a></li>
        <div className='blahblah'>your history will show up here. Not seeing what you expected? Try logging out and back in</div>
      </ul>
      <ul className='logOut'>
        <li className='newChat'><a href='#'><FiUser/>Upgrade to Plus</a></li>
        <li className='newChat'><a href='#'><FiMoon/>Dark mode</a></li>
        <li className='newChat'><a href='#'><FiLogOut/>Log Out</a></li>
      </ul>
    </nav>
  </>
  );
};

export default Nav;
