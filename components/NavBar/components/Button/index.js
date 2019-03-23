import React from 'react';
import { ButtonWrapper } from './components/ButtonWrapper';
import { ButtonText } from './components/ButtonText';

export function Button(props) {
  return (
    <ButtonWrapper onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonWrapper>
  );
}
