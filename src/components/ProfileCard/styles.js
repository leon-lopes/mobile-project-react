import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Card = styled.View`
  margin-top: 15%;
  height: 85%;
  width: 90%;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
`;

export const Avatar = styled.Image`
  margin-top: -10%;
  align-items: center;
  border: 4px;
  border-color: #fff;
  border-radius: 100px;
  height: 125px;
  width: 125px;
`;

export const UserName = styled.Text`
  font-size: 24px;
`;

export const UserText = styled.Text`
  font-size: 18px;
`;

export const UserBio = styled.Text`
  height: 25%;
  text-align: justify;
  font-size: 16px;
  margin-top: 5%;
  color: #a5a5a5;
  padding: 20px;
`;

export const Items = styled.View`
  margin-top: 1%;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

export const TouchArea = styled.TouchableOpacity`
  margin-top: 10%;
`;
