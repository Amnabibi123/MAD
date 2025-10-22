import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import SettingScreen from "../Screens/SettingScreen";
import AboutScreen from "../Screens/AboutScreen";
import DetailsScreen from "../Screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
