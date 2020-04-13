import React, {useState} from 'react';
import {View} from 'react-native';
import styles from '../styles';
import PlayerList from '../../components/PlayerList';
import SearchInput from '../../components/SearchInput';
import axios from 'axios';
import {useDebouncedCallback} from 'use-debounce';
import {useDispatch} from 'react-redux';

export default function User() {
  const [players, setPlayers] = useState([]);

  const onChangeText = (texto) => {
    axios
      .get(`https://api.github.com/search/users?q=${texto} in:user`)
      .then((response) => {
        setPlayers(response.data.items);
      });
  };

  const onButtonPress = (user) => {
    axios.get(`https://api.github.com/users/${user}`).then((response) => {
      onAddPlayer(response.data);
    });
  };
  const [onDebouncedChangeText] = useDebouncedCallback(onChangeText, 500);

  const dispatch = useDispatch();

  const onAddPlayer = (player) => {
    dispatch({
      type: 'ADD_PLAYER',
      payload: {
        id: player.id,
        avatar_url: player.avatar_url,
        name: player.name,
        login: player.login,
        bio: player.bio,
        public_repos: player.public_repos,
        followers: player.followers,
        following: player.following,
        x: 240.4,
        y: 446.1,
      },
    });
  };

  return (
    <View style={styles.container}>
      <PlayerList onButtonPress={onButtonPress} players={players} />
      <SearchInput onChangeText={onDebouncedChangeText} />
    </View>
  );
}
