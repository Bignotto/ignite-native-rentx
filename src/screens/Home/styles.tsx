import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CarData } from "./index";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 124px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;

  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CarCount = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarAvailables = styled(
  FlatList as new (props: FlatListProps<CarData>) => FlatList<CarData>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
