import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const PlayerPhoto = styled.Image`
  width: 40px;
  height: 40px;
  border: 3px;
  border-color: #fff;
  border-style: solid;
  border-radius: 50px;
`;

export const PlayerName = styled.Text`
  margin-top: -5%;
  border-radius: 5px;
  padding: 2px;
  color: #000;
  background-color: #fff;
  text-align: center;
`;

export const TouchArea = styled.View`
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
