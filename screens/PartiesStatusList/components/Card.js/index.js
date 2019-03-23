import React from 'react';
import { Root } from './components/Root';
import { Avatar } from './components/Avatar';
import { Body } from './components/Body';
import { partiesUrlImages } from '../../../../partiesUrlImages';

export const CardStatus = props => (
  <Root>
    <Avatar
      resizeMode='cover'
      source={{
        uri: partiesUrlImages[props.name]
      }}
    />
    <Body>{props.votes}%</Body>
  </Root>
);
