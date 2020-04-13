import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, SearchTextBox, Card} from './styles';

export default function SearchInput(props) {
  return (
    <Container>
      <Card>
        <Icon
          name="search"
          size={30}
          color="#6c9e09"
          style={{marginHorizontal: 25, marginVertical: 15}}
        />
        <SearchTextBox onChangeText={(text) => props.onChangeText(text)} />
      </Card>
    </Container>
  );
}
