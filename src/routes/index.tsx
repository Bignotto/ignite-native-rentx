import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStackRoutes } from "./app.stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
