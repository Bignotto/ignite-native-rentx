import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackHandler, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

import { Car } from "../../components/Car";
import api from "../../services/api";

import {
  Container,
  Header,
  CarCount,
  HeaderContent,
  CarAvailables,
  MyCarsButton,
} from "./styles";
import Logo from "../../assets/logo.svg";
import Load from "../../components/Load";
import { CarDTO } from "../../dtos/CarDTO";
import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  const theme = useTheme();

  function handleCarSelected(car: CarDTO) {
    navigation.navigate("CarDetail" as never, { car } as never);
  }

  function handleNavigateToMyCars() {
    navigation.navigate("MyCars" as never);
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <CarCount>{cars.length} carros disponíveis</CarCount>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarAvailables
          data={cars}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarSelected(item)} />
          )}
        />
      )}
      <MyCarsButton>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.background_secondary}
          onPress={handleNavigateToMyCars}
        />
      </MyCarsButton>
    </Container>
  );
}
