import React from "react";
import { ImMenu } from "react-icons/im";
import styled from "styled-components";
import styles from 'styled-components';

const Header = () => {
const HeaderLine = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items: center;
`;    
return (
    <HeaderLine>   
        <ImMenu />
        <h1>매일 작심삼일</h1>
    </HeaderLine>
    );
}
export default Header;