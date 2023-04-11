import React from "react";
import styled from "styled-components";
import Todoinsert from './Todoinsert';
import Showtodolist from './Showtodolist';

const TodoTemplateWrap = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background-color: gray;
    border-radius: 13px;
`


const Template = (todoData) => {
 

return (
    <div className="todolist-template-wraper">
        <Todoinsert></Todoinsert>
        <Showtodolist></Showtodolist>
    </div>
)
}
export default Template;