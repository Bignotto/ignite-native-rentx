import React, { useEffect, useState } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import api from "../../services/api";
import { Alert } from "react-native";

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  startFormated: string;
  endFormated: string;
}

export function SchedullingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { car, dates } = route.params as Params;

  useEffect(() => {
    setRentalPeriod({
      startFormated: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      endFormated: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  async function handleRentCar() {
    setLoading(true);
    const response = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [...response.data.unavailable_dates, ...dates];

    await api.post("schedules_byuser", {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      endDate: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() =>
        navigation.navigate("SchedullingComplete", {
          nextScreenRoute: "Home",
          title: "Carro alugado!",
          message: `Agora você só precisa ir\n até a concessionária da RENTX \npegar o seu automóvel.`,
        })
      )
      .catch(() => {
        setLoading(false);
        Alert.alert("Não foi possível confirmar o agendamento.");
      });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((a) => (
            <Accessory
              key={a.type}
              name={a.name}
              icon={getAccessoryIcon(a.type)}
            />
          ))}
        </Accessories>
        <RentalPeriod>
          <IconWrapper>
            <Feather name="calendar" size={24} color="#FFFFFF" />
          </IconWrapper>
          <DateWrapper>
            <PeriodText>DE</PeriodText>
            <DateText>{rentalPeriod.startFormated}</DateText>
          </DateWrapper>
          <Feather
            name="chevron-right"
            size={24}
            color={theme.colors.text_detail}
          />
          <DateWrapper>
            <PeriodText>ATÉ</PeriodText>
            <DateText>{rentalPeriod.endFormated}</DateText>
          </DateWrapper>
        </RentalPeriod>
        <RentalPrice>
          <PriceWrapper>
            <PeriodTitle>TOTAL</PeriodTitle>
            <PeriodPrice>{`R$ ${car.rent.price} x ${dates.length} diárias`}</PeriodPrice>
          </PriceWrapper>
          <RentalTotal>R$ {car.rent.price * dates.length}</RentalTotal>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleRentCar} enabled={true} />
      </Footer>
    </Container>
  );
}
