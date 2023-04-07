import{ useNavigate, useParams } from "react-router-dom";
import React, {useEffect} from "react";

const Showtodolist = ({todoList}) => {
 const { id } = useParams();

 if(todoList.length === 0) return null;



return (
    <div className="todolist-wrapper">
            <div className="todolist-box">
                <h2>오늘의 작심 일일</h2>
                <div className="todolist-scoll">
                    <form>
                        <div>
                            {/* {todoList.map((todo,index) => {
                                return (
                                    <ul key = {index} className={index%2 === 0?'odd':'even'}>
                                        <li>{index + 1}</li>
                                        <li>{todo.todo}</li>
                                        <li>{todo.category}</li>
                                        <li>{todo.isComplete}</li>
                                    </ul>
                                )
                            })} */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}
export default Showtodolist;