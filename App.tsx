import React from "react";
import { StatusBar } from "react-native";
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
import { SchedullingDetails } from "./src/screens/SchedullingDetails";
import { SchedullingComplete } from "./src/screens/SchedullingComplete";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { AppProvider } from "./src/hooks";

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
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
