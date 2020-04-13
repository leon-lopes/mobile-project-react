import React, {useRef} from 'react';
import {Container, PlayerPhoto, PlayerName, TouchArea} from './styles';
import Draggable from 'react-native-draggable';

export default function Player(props) {
  const {setPosition, navigateToProfile, player} = props;
  const playerRef = useRef(player);

  return (
    <Draggable
      x={playerRef.current.x}
      y={playerRef.current.y}
      onDragRelease={(event, gestureState) => {
        setPosition(gestureState.dx, gestureState.dy, player.id);
      }}
      onShortPressRelease={() => {
        navigateToProfile(player);
      }}>
      <TouchArea>
        <Container>
          <PlayerPhoto source={{uri: player.avatar_url}} />
          <PlayerName>{player.name}</PlayerName>
        </Container>
      </TouchArea>
    </Draggable>
  );
}
