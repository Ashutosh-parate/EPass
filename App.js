import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import First from "./src/Screens/First";

import SignIn from "./src/Screens/SignIn";
import GateWay from "./src/Screens/GateWay";

import PassForm from "./src/Screens/PassForm";
import SignUp from "./src/Screens/SignUp";
import UserDashboard from "./src/Screens/UserDashboard";
import DownloadPass from "./src/Screens/DownloadPass";
import TokenNo from "./src/Screens/TokenNo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={First}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserDashboard"
          component={UserDashboard}
          options={{
            title: "Welcome User",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GateWay"
          component={GateWay}
          options={{ title: "Epass Dashboard" }}
        />
        <Stack.Screen
          name="passForm"
          component={PassForm}
          options={{ title: "Generate pass" }}
        />
        <Stack.Screen
          name="TokenNo"
          component={TokenNo}
          options={{ title: "Download Pass Here" }}
        />

        <Stack.Screen
          name="DownloadPass"
          component={DownloadPass}
          options={{ title: "Download Pass Here" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
