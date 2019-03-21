import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { PartiesList } from './screens/PartiesList';
import { ElectionsContext } from './context/ElectionsContext';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.container}>
        <PartiesList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});
