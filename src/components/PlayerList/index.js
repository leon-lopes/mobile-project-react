import React from 'react';

import {Container, AddButton, PlayerPhoto, PlayerUser, Card} from './styles';

export default function PlayerList(props) {
  const {onButtonPress, players = []} = props;

  return (
    <Container>
      {players.map((player) => {
        return (
          <Card>
            <PlayerPhoto source={{uri: player.avatar_url}} />
            <PlayerUser>{player.login}</PlayerUser>
            <AddButton
              onPress={() => {
                onButtonPress(player.login);
              }}></AddButton>
          </Card>
        );
      })}
    </Container>
  );
}
