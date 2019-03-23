import React from 'react';
import { Root } from './components/Root';
import { Avatar } from './components/Avatar';
import { Body } from './components/Body';
import { partiesUrlImages } from '../../../../partiesUrlImages';
import { Text } from './components/Text';
import { SubText } from './components/SubText';

export const CardStatus = props => (
  <Root>
    <Avatar
      resizeMode='cover'
      source={{
        uri: partiesUrlImages[props.name]
      }}
    />
    <Body>
      <Text>{props.name}</Text>
      <SubText>Votes:{props.votes}%</SubText>
    </Body>
  </Root>
);
