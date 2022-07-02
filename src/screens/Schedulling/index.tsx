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
import { Alert, StatusBar } from "react-native";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { CarDTO } from "../../dtos/CarDTO";

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Schedulling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

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

    const startDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(
        getPlatformDate(new Date(startDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  }

  function handleNavigateToConfirm() {
    if (!rentalPeriod.startFormatted && !rentalPeriod.endFormatted)
      return Alert.alert("Selecione um período");

    navigation.navigate("SchedullingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
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
            <DateValueWrapper selected={!rentalPeriod.startFormatted}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateValueWrapper>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueWrapper selected={!rentalPeriod.endFormatted}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
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
          onPress={handleNavigateToConfirm}
          enabled={true}
        />
      </Footer>
    </Container>
  );
}
