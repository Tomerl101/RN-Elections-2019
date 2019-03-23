import axios from 'axios';

export const voteParty = async partyId => {
  try {
    return await axios.post(
      `https://isr-elections.herokuapp.com/api/parties/vote/${partyId}`
    );
  } catch (error) {
    console.log(error);
  }
};
