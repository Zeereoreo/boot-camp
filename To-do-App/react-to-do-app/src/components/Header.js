import React from "react";
import { ImMenu , ImCalendar} from "react-icons/im";
import styled from "styled-components";

const Header = () => {
const HeaderLine = styled.div`
    display : flex;
    justify-content : space-around;
    align-items: center; 
`;    

return (
    <HeaderLine>   
        <ImMenu className="icon-button" />
        <h1>매일 작심삼일</h1>
        <ImCalendar className="icon-button"/>
    </HeaderLine>
    );
}
export default Header;