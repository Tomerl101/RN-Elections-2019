import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PartiesList } from './screens/PartiesList';
import { ElectionsContext } from './context/ElectionsContext';

export default function App() {
  return (
    <View style={styles.container}>
      <PartiesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});
