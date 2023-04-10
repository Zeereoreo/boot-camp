import React from "react";
import Showtodolist from './Showtodolist';
import Todoshome from './Todoshome'

const Todoinsert = ({onChangeForm,handleSubmit}) => {

    
    return (
        <div className="create-todo-wrapper">
            <div className="todo-form">
                <form>
                    <div className="input-group">
                        <label>작심추가</label>
                        <input 
                            type="text"
                            onChange={(e)=> onChangeForm(e)}
                            name="todo"
                        />
                    </div>
                    <button
                        className="start-button"
                        onClick={()=> handleSubmit()}>Add</button>
                </form>
            </div>
        </div>
    )
}
export default Todoinsert;