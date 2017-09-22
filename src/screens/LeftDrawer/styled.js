import styled from 'styled-components/native';
import { Brand } from '../../fonts';

export const DrawerContent = styled.View`
  flex: 1;
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
  background-color: #fff;
`;

export const NameContainer = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #5e5e5e;
  padding-bottom: 10;
  margin-bottom: 5;
`;

export const Name = styled.Text`
  font-family: ${Brand.Light};
  font-size: 22;
  color: #1b1a72;
`;

export const ButtonText = styled.Text`
  font-family: ${Brand.Light};
  font-size: 24;
  color: #5e5e5e;
`;
