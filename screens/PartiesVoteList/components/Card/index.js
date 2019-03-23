import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Root } from './components/Root';
import { Cover } from './components/Cover';
import { Content } from './components/Content';
import { Image } from './components/Image';
import { Title } from './components/Title';

export const Card = props => (
  <Root>
    <TouchableOpacity onPress={() => alert('hahaha')}>
      <Cover>
        <Image
          resizeMode='cover'
          source={{
            uri: props.imageUri
          }}
        />
      </Cover>
      <Content>
        <Title>{props.title}</Title>
      </Content>
    </TouchableOpacity>
  </Root>
);
