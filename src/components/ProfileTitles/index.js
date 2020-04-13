import React from 'react';
import {Container, Title, Value} from './styles';

export default function ProfileTitles(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Value>{props.value}</Value>
    </Container>
  );
}
