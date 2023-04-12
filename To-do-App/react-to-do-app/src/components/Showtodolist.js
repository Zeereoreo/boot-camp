import React from "react";
import styled from "styled-components";
import Item from "./Item";
const ShowtodolistWrap = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`

const Showtodolist = () => {
    const exampleList = [
        {
          id: 1,
          todo: "강아지 산책",
          isComlete: true
        },
        {
          id: 2,
          todo: "방 청소",
          isComlete: true
        },
        {
          id: 3,
          todo: "이불 개기",
          isComlete: true
        }
      ]


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