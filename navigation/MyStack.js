import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PlayerProfile from "../screens/PlayerProfile";
import MyTeam from "../screens/MyTeam";
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
    </Stack.Navigator>
  );
}

export default MyStack;
