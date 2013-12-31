// Importing necessary modules and components
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MyStack from "./navigation/MyStack";
import { UserProvider } from "./context/UserContext";
import { PlayersProvider } from "./context/PlayerContext";

// Main application component
export default function App() {
  return (
    <UserProvider>
      <PlayersProvider>
        {/* // Wrapping the entire app in NavigationContainer for navigation
      functionality */}
        <NavigationContainer>
          {/* Using the custom stack navigator defined in MyStack */}
          <MyStack />

          {/* StatusBar component for controlling the appearance of the status bar */}
          <StatusBar style="auto" />
        </NavigationContainer>
      </PlayersProvider>
    </UserProvider>
  );
}

// Styles for the container (not currently used in the provided code)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
