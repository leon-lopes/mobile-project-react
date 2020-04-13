import React from 'react';
import {Container, FieldImage} from './styles';

export default function Field() {
  return (
    <Container>
      <FieldImage source={require('../../assets/field.jpg')} />
    </Container>
  );
}
