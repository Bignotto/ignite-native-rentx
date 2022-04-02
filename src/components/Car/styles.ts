import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 24px;
`;

export const InfoContainer = styled.View`
  width: 40%;
`;

export const CarBrand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const CarName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  margin-top: 16px;
`;

export const RateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const CarInfoWrapper = styled.View``;

export const DailyRateWrapper = styled.View`
  align-items: flex-end;
  flex-direction: row;
`;

export const DailyRateTextWrapper = styled.View`
  margin-right: 24px;
`;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
