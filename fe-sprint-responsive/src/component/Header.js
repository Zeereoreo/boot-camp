import styled from 'styled-components';
import '../App.css';
import { FiPlus } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

const SmallNewChat = styled.div`
  background-color : rgb(52,53,145);
  color : white;
  width: 235px;
  display : grid;
  @media screen and (min-width: 760px){
    display : none;
  }
`
const NavigationBuger = () => {
    const [menu,Setmenu] = useState("false")

}


const Header = () => {
    return (
    <>
        <div className='SmallNewChat'>
            <a href='#'><FiMenu/></a>
            <FiPlus/>
        </div>
    </>
        ); 
};

export default Header;