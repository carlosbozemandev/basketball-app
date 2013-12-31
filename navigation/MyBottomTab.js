import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import PlayerProfile from "../screens/PlayerProfile";
import MyTeam from "../screens/MyTeam";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

const Tab = createBottomTabNavigator();

export default function MyBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          tabBarStyle: {
            backgroundColor: colors.primary,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },

          tabBarHideOnKeyboard: true,
          tabBarIconStyle: {
            width: 50,
            height: 50,
          },
          tabBarLabelPosition: "below-icon",
          tabBarAllowFontScaling: true,
          tabBarKeyboardHidesTabBar: true,
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Player"
        component={PlayerProfile}
        options={{
          title: "Players",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyTeam"
        component={MyTeam}
        options={{
          title: "My Team",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
