import React from "react";
import styled from "styled-components";
import Todoinsert from './Todoinsert';
import Showtodolist from './Showtodolist';


const Template = (todoData) => {
 

return (
    <div className="todolist-template-wraper">
        <Todoinsert></Todoinsert>
        <Showtodolist todoData={todoData}></Showtodolist>
    </div>
)
}
export default Template;