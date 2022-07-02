import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetail } from "../screens/CarDetail";
import { Schedulling } from "../screens/Schedulling";
import { SchedullingDetails } from "../screens/SchedullingDetails";
import { SchedullingComplete } from "../screens/SchedullingComplete";
import MyCars from "../screens/MyCars";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetail" component={CarDetail} />
      <Screen name="Schedulling" component={Schedulling} />
      <Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Screen name="SchedullingComplete" component={SchedullingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
