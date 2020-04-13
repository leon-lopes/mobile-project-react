import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Card,
  Avatar,
  UserName,
  UserText,
  UserBio,
  Items,
  TouchArea,
} from './styles';
import ProfileTitles from '../ProfileTitles';

export default function ProfileCard(props) {
  const {onRemovePlayer, player} = props;
  return (
    <Container>
      <Card>
        <Avatar source={{uri: player.avatar_url}} />
        <UserName>{player.name}</UserName>
        <UserText>{player.login}</UserText>
        <UserBio>{player.bio}</UserBio>
        <Items>
          <ProfileTitles title="Repositórios" value={player.public_repos} />
          <ProfileTitles title="Seguidores" value={player.followers} />
          <ProfileTitles title="Seguindo" value={player.following} />
        </Items>
        <TouchArea onPress={() => onRemovePlayer(player.id)}>
          <Icon
            name="trash"
            size={60}
            color="#6C9E09"
            //style={{position: 'absolute', bottom: 20}}
          />
        </TouchArea>
      </Card>
    </Container>
  );
}
