
import './fetch.css';
import useFetch from './util/useFetch'

const CustomFetchExcercise = () => {
  const fetchData = useFetch('data.json')  
  // 커스텀 훅 사용하기 
  return (
    <div className="todo-wrap">
      <h1 className="todo-title">To do List</h1>
      <div className="todo-list">
        {fetchData &&
          fetchData.todo.map((el) => {
            return <li key={el.id}>{el.todo}</li>;
          })}
      </div>
    </div>
  );
}

export default CustomFetchExcercise;
