import axios from 'axios';

export const getPollStatus = async () => {
  try {
    return await axios.get(
      'https://isr-elections.herokuapp.com/api/parties/poll-status'
    );
  } catch (error) {
    console.error(error);
  }
};
