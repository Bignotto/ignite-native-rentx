import React from "react";
import { Feather } from "@expo/vector-icons";
import { Accessory } from "../../components/Accessory";
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
  Accessories,
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
import { useNavigation } from "@react-navigation/native";

export function SchedullingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
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
        <Accessories>
          <Accessory name="380 km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelSvg} />
          <Accessory name="800 hp" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={FuelSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>
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
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate("SchedullingComplete")}
          enabled={true}
        />
      </Footer>
    </Container>
  );
}
