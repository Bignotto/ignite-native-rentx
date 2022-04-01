import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;

  margin-top: 23px;
  line-height: ${RFValue(25)}px;
`;

export const Acessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
  margin-right: -8px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`;

export const OfflineInfo = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  text-align: center;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  height: 48px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  padding-bottom: 16px;
`;

export const IconWrapper = styled.View`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const DateWrapper = styled.View``;

export const PeriodText = styled.Text`
  font-size: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const DateText = styled.Text`
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const RentalPrice = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 16px;
`;

export const PeriodTitle = styled.Text`
  font-size: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const PeriodPrice = styled.Text`
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PriceWrapper = styled.View``;

export const RentalTotal = styled.Text`
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  margin-bottom: -8px;
`;
