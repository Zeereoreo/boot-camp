import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Template from './components/Template';
import TodoHead from './components/TodoHead';
import Item from './components/Item';
import Showtodolist from './components/Showtodolist';
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
          </Template>
          <Item/>
    </>
  )
}

export default App;
