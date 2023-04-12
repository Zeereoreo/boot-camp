import React from "react";
import styled from "styled-components";

const TodoHeadWrap = styled.div`
    padding: 32px;
    border-bottom: 1px solid #EEEEEE;
    .today{
        color: #EEEEEE;
        font-size: 24px;
    }
    .complite{
        color: #00ADB5;
        font-size: 18px;
    }
`

const TodoHeadLine = styled.div`
    display: flex;
    justify-content: space-around;
`

function TodoHead (){
    const today = new Date()
    const dateString = today.toLocaleDateString('ko-KR',{
        year : 'numeric',
        month: 'long',
        day : 'numeric'
    }
    )
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    })


    return (
        <TodoHeadWrap>
            <TodoHeadLine>
            <div className="today">
                {dateString} {dayName}
            </div>
            <div className="complite">
                남은 할 일 2개 남음
            </div>
            </TodoHeadLine>
        </TodoHeadWrap>
    )
}

export default TodoHead;