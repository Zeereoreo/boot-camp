import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { getPosts } from './Api'
// import useFetch from '../util/useFetch'

const ShowtodolistWrap = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`


const Showtodolist = () => {
    // const exampleList = [
    //     {
    //       id: 1,
    //       todo: "강아지 산책",
    //       isComlete: false
    //     },
    //     {
    //       id: 2,
    //       todo: "방 청소",
    //       isComlete: true
    //     },
    //     {
    //       id: 3,
    //       todo: "이불 개기",
    //       isComlete: true
    //     },
    //     {
    //         id: 4,
    //         todo: "물 먹기",
    //         isComlete: false
    //     }
    //   ]
    // const [exampleList] = useFetch(`http://localhost:4000/todolist/`)
    const [exampleList] = getPosts(`http://localhost:4000/todolist/`)

return(
    <ShowtodolistWrap>
        {exampleList.map(todo => (
            <Item   
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                isComlete={todo.isComlete}
            />
        ))}
    </ShowtodolistWrap>
)
}

export default Showtodolist;