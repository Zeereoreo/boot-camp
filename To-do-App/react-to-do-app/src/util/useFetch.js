import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [todoData, setTodoData] = useState(null);

    

  useEffect(() => {
      fetch(url, {
        headers: {
          "Content-Type" : "application/json",
          Accept: "application/json"
        }
      })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data');
        } 
        return res.json();
      })
      .then(data => {
        console.log(data);
        setTodoData(data);
      })
      .catch(err => {
      })
  }, [url])

  return [todoData];
}

 
export default useFetch;