import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Header from './component/Header';
import Main from './pages/Main';
import {useState} from 'react';


function App() {
  const [isShowNav, setIsShowNav] = useState(false);
  return (
    <div className="App">
      <div className='NavplusMain'>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
