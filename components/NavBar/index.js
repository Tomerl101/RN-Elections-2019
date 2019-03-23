import React, { useContext } from 'react';
import { Root } from './components/Root';
import { Button } from './components/Button';
import { HeaderText } from './components/HeaderText';
import { ElectionsContext } from '../../context/ElectionsContext';
import { SCREEN_TYPE } from '../../context/ElectionsContext';

export function NavBar() {
  const { screenType, setScreenType } = useContext(ElectionsContext);

  const onPress = () => {
    screenType == SCREEN_TYPE.VOTES
      ? setScreenType(SCREEN_TYPE.STATUS)
      : setScreenType(SCREEN_TYPE.VOTES);
  };

  const title = screenType;
  return (
    <Root>
      <HeaderText>בחירות ישראל 2019</HeaderText>
      <Button onPress={onPress} title={title} />
    </Root>
  );
}
