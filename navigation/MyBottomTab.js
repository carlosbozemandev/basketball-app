// Importing necessary components and modules from React and React Native
import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MyTeam from "../screens/MyTeam";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import Players from "../screens/Players";

// Creating a bottom tab navigator using createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Exporting the bottom tab navigator component as the default export
export default function MyBottomTab() {
  return (
    // Bottom Tab Navigator configuration
    <Tab.Navigator
      screenOptions={() => {
        return {
          // Styling for the header
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          // Styling for the tab bar
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },

          // Additional tab bar styling options
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
      {/* Screen for the Home tab */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          // Icon for the Home tab
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      {/* Screen for the Players tab */}
      <Tab.Screen
        name="Players"
        component={Players}
        options={{
          title: "Players",
          // Icon for the Players tab
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      {/* Screen for the MyTeam tab */}
      <Tab.Screen
        name="MyTeam"
        component={MyTeam}
        options={{
          title: "My Team",
          // Icon for the MyTeam tab
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
