// Importing necessary components and modules from React and React Native
import React from "react";
import { ImageBackground } from "react-native";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

// Functional component for the Player Screen
const PlayerScreen = ({ route }) => {
  // Extracting the selected player's data from the route parameters
  const { player } = route.params;

  return (
    // Image background for the Player Screen
    <ImageBackground
      source={{
        uri: player.image,
      }}
      style={styles.container}
    >
      {/* SafeAreaView for handling content within the safe area of the device */}
      <SafeAreaView style={styles.overlay}>
        {/* Player image */}
        <Image source={{ uri: player.image }} style={styles.playerImage} />

        {/* Player information view */}
        <View style={styles.playerInfo}>
          {/* Player name */}
          <Text style={styles.playerName}>{player.name}</Text>

          {/* Player statistics */}
          <Text style={styles.playerStats}>{player.stats}</Text>

          {/* Add more player information as needed */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

// Styles for the Player Screen
const styles = StyleSheet.create({
  // Style for the container view (ImageBackground)
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  // Style for the overlay view (SafeAreaView)
  overlay: {
    flex: 1,
    backgroundColor: "rgba(244, 81, 30, 0.4)", // Orange with 40% transparency
    padding: 20,
  },
  // Style for the player image
  playerImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 50,
  },
  // Style for the player information view
  playerInfo: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
  },
  // Style for the player name text
  playerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Style for the player statistics text
  playerStats: {
    fontSize: 18,
  },
});

// Exporting the PlayerScreen component as the default export
export default PlayerScreen;
