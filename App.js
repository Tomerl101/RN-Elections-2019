import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { PartiesVoteList } from './screens/PartiesVoteList';
import { PartiesStatusList } from './screens/PartiesStatusList';
import { ElectionsContext, SCREEN_TYPE } from './context/ElectionsContext';
import { NavBar } from './components/NavBar';
import { styles } from './styles';

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
          {screenType === SCREEN_TYPE.VOTES && <PartiesVoteList />}
          {screenType === SCREEN_TYPE.STATUS && <PartiesStatusList />}
        </View>
      </SafeAreaView>
    </ElectionsContext.Provider>
  );
}
