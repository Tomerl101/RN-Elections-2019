import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { PartiesVoteList } from './screens/PartiesVoteList';
import { PartiesStatusList } from './screens/PartiesStatusList';
import { ElectionsContext } from './context/ElectionsContext';
import { SCREEN_TYPE } from './context/ElectionsContext';
import { NavBar } from './components/NavBar';

export default function App() {
  const [screenType, setScreenType] = useState(SCREEN_TYPE.VOTES);

  return (
    <ElectionsContext.Provider
      value={{
        screenType,
        setScreenType
      }}
    >
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <View style={styles.container}>
          <NavBar />
          {screenType == SCREEN_TYPE.VOTES && <PartiesVoteList />}
          {screenType == SCREEN_TYPE.STATUS && <PartiesStatusList />}
        </View>
      </SafeAreaView>
    </ElectionsContext.Provider>
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
