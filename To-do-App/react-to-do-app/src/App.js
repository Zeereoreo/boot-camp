import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Template from './components/Template';
import TodoHead from './components/TodoHead';
import Showtodolist from './components/Showtodolist';
import Todoinsert from './components/Todoinsert';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios'

export const getTodoList = async () => {
    const response = await axios.get('http://localhost:3001/todolist');
    return response.data;
  };
  
  export const getPostById = async id => {
    const response = await axios.get(`http://localhost:3001/todolist/${id}`);
    return response.data;
  };



function App() {
  const [todo,setTodo] = useState([])
  
    const exampleList = getTodoList()
    useEffect(()=>{
        setTodo(exampleList)
    },[exampleList])
    console.log(exampleList)

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #222831;
    }
  `

  // const getAllTodo = () => {
  //   getTodoList()
  //   .then(data => {
  //     console.log(data)
  //     setTodo(data)
  //   })
  // }

  return (
    <>
    <GlobalStyle/>
      <Header />
        <Nav />
          <Template >
          <TodoHead />
          <Showtodolist exampleList={exampleList}/>
          <Todoinsert/>
          </Template>
    </>
  )
}

export default App;
