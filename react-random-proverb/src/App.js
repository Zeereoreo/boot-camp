import logo from './logo.svg';
import './App.css';

let langs = ["JavaScript", "HTML", "Python"];

  let viewLangs = langs.map((it) => {
      return <p>{it}</p>;
    });
    
  return (
    <div>
      {viewLangs}
    </div>
  );

export default App;
