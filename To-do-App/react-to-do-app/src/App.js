import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Template from './components/Template';
import Todoinsert from './components/Todoinsert';
import Todoshome from './components/Todoshome';
import Item from './components/Item';
import useFetch from './util/useFetch';




function App() {

  const [createTodo, setCreateTodo] = useState({});
  const [numberTodos, setNumberTodos] = useState(0);
  const [todoData, setTodoData] = useState([
    {
      "id": 1,
      "todo": "강아지 산책",
      "category": "할 일",
      "isComlete": true
    },
    {
      "id": 2,
      "todo": "방 청소",
      "category": "할 일",
      "isComlete": true
    },
    {
      "id": 3,
      "todo": "이불 개기",
      "category": "할 일",
      "isComlete": true
    }
  ]);


  
  const handleSubmit = () => {
    setCreateTodo(createTodo)
      .then(() => {
        setNumberTodos(numberTodos+1);
    });
}

  const handleDelete = () => {

  }

  const onChangeForm = (e) => {
    let inputData = createTodo;
    if (e.target.name === 'todo') {
      createTodo.todo = e.target.value;
    } 
    setCreateTodo(inputData);
}

  return (
    <>
      <Header />
        <Nav />
          <Template handleSubmit={handleSubmit}
          onChangeForm={onChangeForm}
          todoData={todoData}/>
          <Item/>
    </>
  )
}

export default App;
