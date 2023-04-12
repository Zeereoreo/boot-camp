import React from "react";
import styled from "styled-components";


const TodoTemplateWrap = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background-color: #393E46;
    border-radius: 13px;
`


const Template = ({children}) => {
 

return <TodoTemplateWrap>{children}</TodoTemplateWrap>

}
export default Template;