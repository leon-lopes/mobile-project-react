import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import styles from '../styles';

import ButtonHome from '../../components/ButtonHome';
import Player from '../../components/Player';
import Field from '../../components/Field';

import {useSelector} from 'react-redux';

export default function Home() {
  const players = useSelector((state) => {
    return state.field;
  });

  const navigation = useNavigation();
  const navigateToProfile = (playerID) => {
    navigation.navigate('Perfil do Jogador', playerID);
  };

  const dispatch = useDispatch();
  const setPosition = (moveX, moveY, playerID) => {
    dispatch({
      type: 'POSITION_PLAYER',
      payload: {
        id: playerID,
        moveX,
        moveY,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Field />
      <ButtonHome />
      {players.map((player) => {
        return (
          <Player
            player={player}
            navigateToProfile={navigateToProfile}
            setPosition={setPosition}
          />
        );
      })}
    </View>
  );
}
