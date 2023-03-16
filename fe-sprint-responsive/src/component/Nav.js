import styled from 'styled-components';
import '../App.css';
import { FiPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const TopButton = styled.div`
  position: fixed;
  width: 200px;
  height: 50px;
  
`;
const Back = styled.div`
  background-color : black;
  height: 1000px;
  width: 235px;
  display : grid;
  @media screen and (max-width: 760px){
    display : none;
  }
`
const IconWrap = styled.div`
  display : flex;
  color : white;
  width : 20rm;
  height : 50rm;
  
  svb {
    color : white;
  }
`;
const LogoutWrap = styled.div`
  display : flex;
  color : white;
  width : 20rm;
  height : 50rm;
  svb {
    color : white;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  margin: auto;
  
  }
`;

const Nav = () => {
  return (
  <nav>
  <Back>
    <IconWrap>
      <FiPlus></FiPlus>
      <div className={TopButton}>New chat</div>
    </IconWrap>
    <LogoutWrap>
      <FiLogOut></FiLogOut>
      <div className={TopButton}>Log Out</div>
    </LogoutWrap>
  </Back>
  </nav>
  );
};

export default Nav;
