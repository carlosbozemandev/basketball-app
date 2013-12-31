// Importing necessary modules from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import PlayerProfile from "../screens/PlayerProfile";
import MyBottomTab from "./MyBottomTab";
import OnboardingScreen from "../screens/OnboardingScreens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";

// Creating a stack navigator using createStackNavigator
const Stack = createStackNavigator();

// Function to define the stack navigator for the app
function MyStack() {
  return (
    // Stack Navigator configuration
    <Stack.Navigator
      initialRouteName="OnboardingScreen" // Set the initial screen name
      screenOptions={{
        // Styling for the header
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
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={() => {
          return {
            headerShown: false, // Hide the header for this screen
          };
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={() => {
          return {
            headerShown: false, // Hide the header for this screen
          };
        }}
      />
      {/* Screen for the bottom tab navigator */}
      <Stack.Screen
        name="TabScreen"
        component={MyBottomTab}
        options={() => {
          return {
            headerShown: false, // Hide the header for this screen
          };
        }}
      />
      {/* Screen for the player profile */}
      <Stack.Screen
        name="PlayerProfile"
        component={PlayerProfile}
        options={{
          title: "Player Profile", // Set the header title for this screen
        }}
      />
    </Stack.Navigator>
  );
}

// Exporting the MyStack component as the default export
export default MyStack;
