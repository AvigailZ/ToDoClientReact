import axios from 'axios';


// 'http://localhost:5105/items';
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Error occurred:', error);
    return Promise.reject(error); 
  }
);


export default {
  getTasks: async () => {
    const result = await axios.get()    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/${name}`)  
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    await axios.put(`/${id}&${isComplete}`)    
    return {};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await axios.delete(`/${id}`)    
  }
};
