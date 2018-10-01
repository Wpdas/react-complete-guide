import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burguer-54bdd.firebaseio.com/'
});

export default instance;
