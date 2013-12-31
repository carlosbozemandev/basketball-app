import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Home from "../screens/Home";
import MyTeam from "../screens/MyTeam";
import Players from "../screens/Players";
import News from "../screens/News";
import User from "../screens/User";
import { colors } from "../theme";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30, // Adjust the top position as needed
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const MyBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: "below-icon",
        tabBarAllowFontScaling: true,
        tabBarKeyboardHidesTabBar: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "MyTeam") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Players") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "News") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? colors.primary : "black"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyTeam" component={MyTeam} />
      <Tab.Screen
        name="Players"
        component={Players}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white", // Adjust the background color as needed
    borderTopColor: "transparent",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    paddingBottom: 10,
    shadowColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});

export default MyBottomTab;
