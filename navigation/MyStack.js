import { createStackNavigator } from "@react-navigation/stack";
import PlayerProfile from "../screens/PlayerProfile";
import MyBottomTab from "./MyBottomTab";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff", // Set your header background color
        },
        headerTintColor: "#000", // Set your header text color
        headerTitleStyle: {
          fontWeight: "bold", // Set your header text font weight
        },
      }}
    >
      <Stack.Screen
        name="TabScreen"
        component={MyBottomTab}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="PlayerProfile"
        component={PlayerProfile}
        options={{
          title: "Player Profile",
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
