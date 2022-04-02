import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  height: 325px;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.header};

  padding-top: ${getStatusBarHeight() + 30}px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

interface DateValueProps {
  selected: boolean;
}
export const DateValueWrapper = styled.View<DateValueProps>`
  ${({ selected, theme }) =>
    selected! &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `}
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
