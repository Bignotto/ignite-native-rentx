import React, { useState } from "react";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import {
  Container,
  Header,
  HeaderTitle,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueWrapper,
  Content,
  Footer,
} from "./styles";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { useNavigation } from "@react-navigation/native";

export function Schedulling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      // [start, end] = [end, start];
      start = end;
      end = start;
    }
    setLastSelectedDate(date);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          color={theme.colors.shape}
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle>
          Escolha uma{`\n`}data de início e{`\n`}fim do aluguel:
        </HeaderTitle>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueWrapper selected={true}>
              <DateValue></DateValue>
            </DateValueWrapper>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueWrapper selected={true}>
              <DateValue>25/03/2022</DateValue>
            </DateValueWrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar onDayPress={handleChangeDate} markedDates={markedDates} />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate("SchedullingDetails")}
          enabled={true}
        />
      </Footer>
    </Container>
  );
}
