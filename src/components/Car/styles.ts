import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 16px;
`;

export const InfoContainer = styled.View``;

export const CarBrand = styled.Text``;

export const CarName = styled.Text``;

export const RateText = styled.Text``;

export const RateValue = styled.Text``;

export const CarIcon = styled.View``;
