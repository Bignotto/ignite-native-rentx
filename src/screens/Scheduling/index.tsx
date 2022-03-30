import React from "react";
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

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} />
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
      <Content></Content>
      <Footer>
        <Button title="Confirmar" onPress={() => {}} enabled={true} />
      </Footer>
    </Container>
  );
}
