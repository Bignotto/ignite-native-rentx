import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Confirmation } from "../screens/Confirmation";
import Splash from "../screens/Splash";
import { SignIn } from "../screens/SignIn";

import { SignUpStep1 } from "../screens/SignUp/SignUpStep1";
import SignUpStep2 from "../screens/SignUp/SignUpStep2";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp1" component={SignUpStep1} />
      <Screen name="SignUp2" component={SignUpStep2} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
