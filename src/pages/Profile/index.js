import React from 'react';
import {View} from 'react-native';
import styles from '../styles';
import ProfileCard from '../../components/ProfileCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

export default function Profile() {
  const route = useRoute();
  const player = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onRemovePlayer = (playerID) => {
    dispatch({
      type: 'REMOVE_PLAYER',
      payload: {id: playerID},
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ProfileCard player={player} onRemovePlayer={onRemovePlayer} />
    </View>
  );
}
