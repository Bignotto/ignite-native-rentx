import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";
import api from "../../services/api";

import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";

import {
  Container,
  Header,
  HeaderTitle,
  HeaderText,
  Content,
  ScheduleCountWrapper,
  ScheduledText,
  ScheduledCount,
  SchedulesList,
  Footer,
  FooterText,
} from "./styles";
import { Car } from "../../components/Car";
import Load from "../../components/Load";

interface Schedule {
  car: CarDTO;
  user_id: number;
  startDate: string;
  endDate: string;
  id: number;
}

export default function MyCars() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const theme = useTheme();
  const navigation = useNavigation<any>();

  useEffect(() => {
    async function load() {
      const response = await api.get(`/schedules_byuser/?user_id=${1}`);
      const fetchedSchedules: Schedule[] = response.data;
      setSchedules(fetchedSchedules);

      const fetchedCars = fetchedSchedules.map((item) => item.car);
      setCars(fetchedCars);

      setLoading(false);
    }

    load();
  }, []);

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
        <HeaderTitle>Seus agendamentos estão aqui.</HeaderTitle>
        <HeaderText>Conforto, segurança e praticidade.</HeaderText>
      </Header>
      <Content>
        <ScheduleCountWrapper>
          <ScheduledText>Agendamentos feitos</ScheduledText>
          <ScheduledCount>{schedules.length}</ScheduledCount>
        </ScheduleCountWrapper>
        {loading ? (
          <Load />
        ) : (
          <SchedulesList
            data={cars}
            keyExtractor={(item, i) => `${item.id}-${i}`}
            renderItem={({ item }) => <Car data={item} />}
          />
        )}
      </Content>
    </Container>
  );
}
