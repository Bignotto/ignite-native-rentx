import { FlatList, FlatListProps } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDTO } from "../../dtos/CarDTO";

export const Container = styled.View`
  flex: 1;
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

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ScheduleCountWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;

export const ScheduledText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ScheduledCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const SchedulesList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View``;

export const FooterText = styled.Text``;
