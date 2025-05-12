import Splash from "../screens/Splash";
import Dashboard from "../screens/Dashboard";
import React from "react";
import { navigationRef } from "../navigation/NavigationService";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import Details from "../screens/Details";
import { CustomDarkTheme, CustomDefaultTheme } from "../theme/Theme";

const Stack = createStackNavigator();

function AppNavigator() {
  let currentTheme = useSelector((state) => state.themeReducer.theme);
  let theme = currentTheme ? CustomDefaultTheme : CustomDarkTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
