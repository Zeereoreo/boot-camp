import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Template from './components/Template';
import TodoHead from './components/TodoHead';
import Showtodolist from './components/Showtodolist';
import Todoinsert from './components/Todoinsert';
import { createGlobalStyle } from 'styled-components';




function App() {


  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #222831;
    }
  `

  return (
    <>
    <GlobalStyle/>
      <Header />
        <Nav />
          <Template >
          <TodoHead />
          <Showtodolist/>
          <Todoinsert/>
          </Template>
    </>
  )
}

export default App;
