import axios from 'axios';

export const getParties = async () => {
  try {
    return await axios.get('https://isr-elections.herokuapp.com/api/parties');
  } catch (error) {
    console.error(error);
  }
};
