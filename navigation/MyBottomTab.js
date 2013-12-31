import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import PlayerProfile from "../screens/PlayerProfile";
import MyTeam from "../screens/MyTeam";

const Tab = createBottomTabNavigator();

export default function MyBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Tab.Screen name="Player" component={PlayerProfile} />
      <Tab.Screen name="MyTeam" component={MyTeam} />
    </Tab.Navigator>
  );
}
