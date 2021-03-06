import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { getPollStatus } from '../../api/getPollStatus';
import { CardStatus } from './components/Card.js';
import { sortByCurrentVotes } from './helpers/sortByCurrentVotes';
import { getTotalVotes } from './helpers/getTotalVotes';
import { styles } from './style';

export function PartiesStatusList() {
  const [topFiveParties, setTopFiveParties] = useState([]);
  const [partiesTotalVotes, setPartiesTotalVotes] = useState(1);

  const getPollStatusAsync = async () => {
    const { data: partiesWithVotes } = await getPollStatus();
    const totalVotes = getTotalVotes(partiesWithVotes);
    setPartiesTotalVotes(totalVotes);
    const sortedParties = sortByCurrentVotes(partiesWithVotes);
    setTopFiveParties(sortedParties.slice(0, 5));
  };

  useEffect(() => {
    getPollStatusAsync();
  }, []);

  const _renderItem = ({ item }) => {
    const currVotes = item[1].currentVotes;
    const votesPercentage = ((currVotes / partiesTotalVotes) * 100).toFixed(2);

    return <CardStatus name={item[0]} votes={votesPercentage} />;
  };

  const _keyExtractor = item => item[0];

  return (
    <FlatList
      data={topFiveParties}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      contentContainerStyle={styles.container}
    />
  );
}
