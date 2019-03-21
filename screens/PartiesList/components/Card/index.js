import React from 'react';
import { Root } from './components/Root';
import { Cover } from './components/Cover';
import { Content } from './components/Content';
import { Image } from './components/Image';
import { Title } from './components/Title';

export const Card = props => (
  <Root>
    <Cover>
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
        }}
      />
    </Cover>
    <Content>
      <Title>{props.title}</Title>
    </Content>
  </Root>
);
