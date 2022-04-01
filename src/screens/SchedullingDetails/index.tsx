import React from "react";
import { Feather } from "@expo/vector-icons";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";
import AccelSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import FuelSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  About,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  Acessories,
  Footer,
  RentalPeriod,
  DateWrapper,
  PeriodText,
  DateText,
  IconWrapper,
  RentalPrice,
  PeriodTitle,
  PeriodPrice,
  PriceWrapper,
  RentalTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components/native";

export function SchedullingDetails() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.pngmart.com/files/15/Side-View-Red-Ferrari-PNG-Image.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Ferrari</Brand>
            <Name>F50</Name>
          </Description>
          <Rent>
            <Period>Diária</Period>
            <Price>R$ 580,00</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380 km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelSvg} />
          <Acessory name="800 hp" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={FuelSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>
        <RentalPeriod>
          <IconWrapper>
            <Feather name="calendar" size={24} color="#FFFFFF" />
          </IconWrapper>
          <DateWrapper>
            <PeriodText>DE</PeriodText>
            <DateText>01/02/2022</DateText>
          </DateWrapper>
          <Feather
            name="chevron-right"
            size={24}
            color={theme.colors.text_detail}
          />
          <DateWrapper>
            <PeriodText>ATÉ</PeriodText>
            <DateText>31/05/2022</DateText>
          </DateWrapper>
        </RentalPeriod>
        <RentalPrice>
          <PriceWrapper>
            <PeriodTitle>TOTAL</PeriodTitle>
            <PeriodPrice>R$ 580 x3 diárias</PeriodPrice>
          </PriceWrapper>
          <RentalTotal>R$ 2.900</RentalTotal>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={() => {}} enabled={true} />
      </Footer>
    </Container>
  );
}
