import React from "react";

const Todoinsert = ({onChangeForm,handleSubmit}) => {

    
    return (
        <div className="create-todo-wrapper">
            <div className="todo-form">
                <form>
                    <div className="input-group">
                        <label>Todo</label>
                        <input 
                            type="text"
                            onChange={(e)=> onChangeForm(e)}
                            name="todo"
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text"
                            onChange={(e)=> onChangeForm(e)}
                            name="category"
                        />
                    </div>
                    <div className="input-group">
                        <label>isComplete</label>
                        <input 
                            type="text"
                            onChange={(e)=> onChangeForm(e)}
                            name="isComplete"
                        />
                    </div>
                    <button
                        className="start-button"
                        onClick={()=> handleSubmit()}>작심일일 START</button>
                </form>
            </div>
        </div>
    )
}
export default Todoinsert;