import React from "react";
import styled, {css} from "styled-components";
import {MdDone, MdDelete, MdBuild } from 'react-icons/md';

const RemoveIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const RebuildIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #00ADB5;
    }
    display: none;
`;

const TodoItemWrap = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${RebuildIcon}{
            display: initial;
        }
        ${RemoveIcon}{
            display: initial;
        }
    }
`

const CheckIcon = styled.div`
width: 32px;
height: 32px;
border-radius: 16px;
border: 1px solid #00ADB5;
font-size: 24px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
${props =>
  props.isComlete &&
  css`
    border: 1px solid #EEEEEE;
    color: #EEEEEE;
  `}
`;

const Todo = styled.div`
flex: 1;
font-size: 21px;
color: #00ADB5;
${props =>
  props.isComlete &&
  css`
    color: #EEEEEE;
    text-decoration: line-through;
  `}
`;

const Item = ({id, todo, isComlete}) => {
 

return (
    <TodoItemWrap>
        <CheckIcon isComlete={isComlete}>
            {isComlete && <MdDone/>}
        </CheckIcon>
        <Todo isComlete={isComlete}>{todo}</Todo>
        <RebuildIcon><MdBuild/></RebuildIcon>
        <RemoveIcon>
        <MdDelete/>
        </RemoveIcon>
    </TodoItemWrap>
)
}
export default Item;