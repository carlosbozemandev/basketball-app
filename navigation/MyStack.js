import { createStackNavigator } from "@react-navigation/stack";
import PlayerProfile from "../screens/PlayerProfile";
import MyBottomTab from "./MyBottomTab";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}
    >
      <Stack.Screen name="TabScreen" component={MyBottomTab} />
      <Stack.Screen name="PlayerProfile" component={PlayerProfile} />
    </Stack.Navigator>
  );
}

export default MyStack;
