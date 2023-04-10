import{ useNavigate, useParams } from "react-router-dom";
import React, {useEffect} from "react";


const Showtodolist = ({todoData}) => {
console.log(todoData) 


return(
    <div className="">
        {todoData.map(todo =>
            <div key={todo.id}>
                <ul>
                    <li>{todo.todo}</li>
                </ul>
            </div>)
        }
    </div>
)
}

export default Showtodolist;