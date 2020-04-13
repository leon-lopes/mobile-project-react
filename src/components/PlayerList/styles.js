import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin: 2%;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #6c9e09;
  border-radius: 50px;
  width: 100%;
  height: 80px;
  margin-top: 2%;
`;
export const PlayerPhoto = styled.Image`
  border: 3px;
  border-color: #fff;
  border-radius: 50px;
  position: absolute;
  width: 80px;
  height: 80px;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 77%;
  width: 80px;
  height: 80px;
  border: 3px;
  border-color: #fff;
  border-radius: 50px;
  background-color: #fff;
`;

export const PlayerName = styled.Text`
  position: absolute;
  margin-left: 25%;
  margin-top: 25%;
  color: #fff;
  font-size: 20px;
`;

export const PlayerUser = styled.Text`
  position: absolute;
  margin-left: 25%;
  color: #fff;
  font-size: 24px;
`;
