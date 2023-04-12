import axios from 'axios'

export const getPosts = async () => {
    const response = await axios.get('http://localhost:4000/todolist');
    return response.data;
  };
  
  export const getPostById = async id => {
    const response = await axios.get(`http://localhost:4000/todolist/${id}`);
    return response.data;
  };

