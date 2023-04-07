import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Template from './components/Template';
import Todoinsert from './components/Todoinsert';
import Showtodolist from './components/Showtodolist';
import Item from './components/Item';

function App() {
  const [createTodo, setCreateTodo] = useState({});
  const [numberTodos, setNumberTodos] = useState(0);
  const [todoList, setTodoList] = useState([]);


  const handleSubmit = () => {
    setCreateTodo(createTodo)
      .then(() => {
        setNumberTodos(numberTodos+1);
    });
}

  const onChangeForm = (e) => {
    let inputData = createTodo;
    if (e.target.name === 'todo') {
      createTodo.todo = e.target.value;
    } else if (e.target.name === 'category') {
      createTodo.category = e.target.value;
    } else if (e.target.name === 'isComplete') {
      createTodo.isComplete = e.target.value;
    }
    setCreateTodo(inputData);
}

  return (
    <>
      <Header />
        <Nav />
          <Template />
          <Todoinsert handleSubmit={handleSubmit}
          onChangeForm={onChangeForm}
          createTodo={createTodo}/>
          <Showtodolist todoList={todoList} />
          <Item/>
    </>
  )
}

export default App;
