import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Main from './pages/Main';



function App() {
  return (
    <div className="App">
      <div className='NavplusMain'>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
