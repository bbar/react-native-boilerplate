import styled from 'styled-components/native';
import colors from './colors';

// ----- Titillium ----- //

export const Titillium = {
  ExtraLight: 'TitilliumWeb-ExtraLight',
  Light: 'TitilliumWeb-Light',
  Regular: 'TitilliumWeb-Regular',
  SemiBold: 'TitilliumWeb-SemiBold',
  Bold: 'TitilliumWeb-Bold',
};

export const Brand = { ...Titillium };

// ----- Text Components ----- //
export const BrandTextLight = styled.Text`
  font-family: ${Brand.Light};
  color: ${colors.text.gray};
`;

export const BrandTextRegular = styled.Text`
  font-family: ${Brand.Regular};
  color: ${colors.text.gray};
`;

export const BrandTextSemiBold = styled.Text`
  font-family: ${Brand.SemiBold};
  color: ${colors.text.gray};
`;

export const BrandTextBold = styled.Text`
  font-family: ${Brand.Bold};
  color: ${colors.text.gray};
`;
