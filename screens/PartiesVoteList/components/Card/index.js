import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Root } from './components/Root';
import { Cover } from './components/Cover';
import { Content } from './components/Content';
import { Image } from './components/Image';
import { Title } from './components/Title';
import { voteParty } from '../../../../api/voteParty';

export const Card = props => (
  <Root>
    <TouchableOpacity
      onPress={async () => {
        const result = await voteParty(props.title);
        if (result) {
          alert(`Thank you for voting ${props.title}`);
        } else {
          alert(`Can't vote for ${props.title}`);
        }
      }}
    >
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
