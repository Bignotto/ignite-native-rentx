import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { CarDetail } from "./src/screens/CarDetail";
import { Scheduling } from "./src/screens/Scheduling";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Scheduling />
    </ThemeProvider>
  );
}
