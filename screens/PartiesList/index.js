import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Card } from './components/Card';
import { getParties } from '../../api/getParties';
import { partiesUrlImages } from '../../partiesUrlImages';

export function PartiesList() {
  const [parties, setParties] = useState();

  useEffect(() => {
    getPartiesAsync();
  }, []);

  const getPartiesAsync = async () => {
    const { data } = await getParties();
    setParties(data.parties);
  };

  const _renderItem = ({ item }) => (
    <Card imageUri={partiesUrlImages[item.id]} title={item.id} />
  );

  const _keyExtractor = (item, index) => item.id;

  return (
    <FlatList
      data={parties}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      numColumns={2}
    />
  );
}
