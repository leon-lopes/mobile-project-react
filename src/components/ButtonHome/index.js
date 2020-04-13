import React from 'react';
import {Container, ButtonText, Card, Touch} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function ButtonHome() {
  const navigation = useNavigation();

  return (
    <Container>
      <Touch
        onPress={() => {
          navigation.navigate('Adicionar ao SQUAD');
        }}>
        <Card>
          <Icon
            name="search"
            size={30}
            color="#6c9e09"
            style={{margin: '8%'}}
          />
          <ButtonText>Adicionar ao SQUAD</ButtonText>
        </Card>
      </Touch>
    </Container>
  );
}
