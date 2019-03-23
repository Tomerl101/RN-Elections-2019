import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { getPollStatus } from '../../api/getPollStatus';
import { CardStatus } from './components/Card.js';
import { sortByCurrentVotes } from './helpers/sortByCurrentVotes';

export function PartiesStatusList() {
  const [topFiveParties, setTopFiveParties] = useState([]);
  const [partiesTotalVotes, setPartiesTotalVotes] = useState(1);

  useEffect(() => {
    getPollStatusAsync();
  }, []);

  const getPollStatusAsync = async () => {
    let totalVotes = 0;
    const { data: partiesWithVotes } = await getPollStatus();
    //get total votes of all parties
    Object.entries(partiesWithVotes).forEach(
      i => (totalVotes += i[1].currentVotes)
    );
    setPartiesTotalVotes(totalVotes);
    sortedParties = sortByCurrentVotes(partiesWithVotes);
    setTopFiveParties(sortedParties.slice(0, 5));
  };

  const _renderItem = ({ item }) => {
    const currVotes = item[1].currentVotes;
    votesPercentage = ((currVotes / partiesTotalVotes) * 100).toFixed(2);

    return <CardStatus name={item[0]} votes={votesPercentage} />;
  };

  const _keyExtractor = item => item[0];

  return (
    <FlatList
      data={topFiveParties}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      contentContainerStyle={{ margin: 10, paddingBottom: 30 }}
    />
  );
}
